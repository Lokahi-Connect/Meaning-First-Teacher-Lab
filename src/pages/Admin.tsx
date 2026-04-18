/*
 * PHASE 1 — Local admin (localStorage, single teacher).
 *
 * PHASE 2 IMPLEMENTATION NOTES — Multi-user Supabase backend:
 *
 * Backend: Supabase (free tier — PostgreSQL + REST API + row-level security + Auth)
 *
 * Supabase schema:
 *
 *   teachers (id uuid PK, email text UNIQUE, name text, created_at timestamptz)
 *
 *   progress (
 *     id uuid PK, teacher_id uuid FK→teachers.id,
 *     module_id int, status text, score int, total int,
 *     passed bool, completed_at timestamptz
 *   )
 *
 *   responses (
 *     id uuid PK, teacher_id uuid FK→teachers.id,
 *     module_id int, section_id int, question_index int,
 *     question_text text, response text, created_at timestamptz
 *   )
 *
 * Auth: Supabase Auth — email/password registration for teachers.
 *   Admin role: separate "admin" role claim in user metadata, enforced by RLS policies.
 *   Teachers can only read/write their own rows (teacher_id = auth.uid()).
 *   Admins bypass RLS with a service-role key (server-side only).
 *
 * CSV export structure (Phase 1) matches this schema intentionally:
 *   type=progress rows → progress table
 *   type=response rows → responses table
 *   teacher_id is "local" in Phase 1; becomes the Supabase UUID in Phase 2.
 */

import { useState } from "react";
import { modules } from "../modules";
import { moduleAssessments } from "../data/assessments";
import { modulePractice } from "../data/practice";
import { moduleRecall } from "../data/recallBank";
import {
  getProgress,
  getAssessmentResults,
  getPracticeAnswers,
  clearAllData,
  type ModuleStatus,
} from "../utils/progress";

// ── Helpers ──────────────────────────────────────────────────────────────────

function statusLabel(s: ModuleStatus): string {
  if (s === "passed") return "Passed";
  if (s === "in-progress") return "In Progress";
  if (s === "available") return "Available";
  return "Locked";
}

function statusColor(s: ModuleStatus): string {
  if (s === "passed") return "var(--seafoam)";
  if (s === "in-progress") return "#D97706"; // amber
  return "var(--muted)";
}

function statusBg(s: ModuleStatus): string {
  if (s === "passed") return "rgba(46,196,160,0.12)";
  if (s === "in-progress") return "rgba(217,119,6,0.1)";
  return "rgba(107,114,128,0.08)";
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

function escapeCsv(val: string | number | boolean | undefined): string {
  if (val === undefined || val === "") return "";
  const s = String(val);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

// ── Practice response reader ──────────────────────────────────────────────────

interface PracticeEntry {
  moduleNumber: number;
  sectionNumber: number;
  questionIndex: number;
  questionText: string;
  response: string;
}

function parsePracticeAnswers(): PracticeEntry[] {
  const raw = getPracticeAnswers();
  const entries: PracticeEntry[] = [];
  for (const [key, response] of Object.entries(raw)) {
    if (!response.trim()) continue;
    const match = key.match(/^m(\d+)_s(\d+)_q(\d+)$/);
    if (!match) continue;
    const moduleNumber = parseInt(match[1]);
    const sectionNumber = parseInt(match[2]);
    const questionIndex = parseInt(match[3]);
    const questionText = modulePractice[moduleNumber]?.[sectionNumber]?.[questionIndex] ?? key;
    entries.push({ moduleNumber, sectionNumber, questionIndex, questionText, response });
  }
  entries.sort((a, b) =>
    a.moduleNumber !== b.moduleNumber
      ? a.moduleNumber - b.moduleNumber
      : a.sectionNumber !== b.sectionNumber
      ? a.sectionNumber - b.sectionNumber
      : a.questionIndex - b.questionIndex,
  );
  return entries;
}

// ── CSV export ────────────────────────────────────────────────────────────────

function buildCsv(): string {
  const progress = getProgress();
  const assessmentResults = getAssessmentResults();
  const practiceEntries = parsePracticeAnswers();
  const rows: string[] = [];

  // Header comment rows (not true CSV, but readable in a text editor / noted for import scripts)
  const header = [
    "type",
    "teacher_id",
    "module_id",
    "module_name",
    "status",
    "score",
    "total",
    "percentage",
    "passed",
    "completed_at",
    "section_id",
    "question_index",
    "question_text",
    "response",
  ].join(",");
  rows.push(header);

  // Progress rows
  for (const mod of modules) {
    const status = progress[String(mod.module_number)] ?? "locked";
    const result = assessmentResults[String(mod.module_number)];
    rows.push(
      [
        "progress",
        "local",
        mod.module_number,
        escapeCsv(mod.title),
        status,
        result?.score ?? "",
        result?.total ?? "",
        result ? Math.round((result.score / result.total) * 100) : "",
        result ? result.passed : "",
        result ? escapeCsv(result.completedAt) : "",
        "",
        "",
        "",
        "",
      ].join(","),
    );
  }

  // Response rows
  for (const e of practiceEntries) {
    const mod = modules.find((m) => m.module_number === e.moduleNumber);
    rows.push(
      [
        "response",
        "local",
        e.moduleNumber,
        escapeCsv(mod?.title ?? ""),
        "",
        "",
        "",
        "",
        "",
        "",
        e.sectionNumber,
        e.questionIndex,
        escapeCsv(e.questionText),
        escapeCsv(e.response),
      ].join(","),
    );
  }

  return rows.join("\n");
}

function downloadCsv() {
  const content = buildCsv();
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mfl-progress-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="admin-stat">
      <span className="admin-stat__value">{value}</span>
      <span className="admin-stat__label">{label}</span>
      {sub && <span className="admin-stat__sub">{sub}</span>}
    </div>
  );
}

function PracticeViewer({ moduleNumber }: { moduleNumber: number }) {
  const entries = parsePracticeAnswers().filter((e) => e.moduleNumber === moduleNumber);
  if (entries.length === 0) {
    return <p className="admin-empty">No practice responses saved for this module.</p>;
  }

  // Group by section
  const bySection: Record<number, PracticeEntry[]> = {};
  for (const e of entries) {
    (bySection[e.sectionNumber] ??= []).push(e);
  }

  return (
    <div className="admin-practice-viewer">
      {Object.entries(bySection).map(([sec, qs]) => (
        <div key={sec} className="admin-practice-section">
          <h5 className="admin-practice-section__label">Section {sec}</h5>
          {qs.map((q) => (
            <div key={q.questionIndex} className="admin-practice-q">
              <p className="admin-practice-q__question">
                <span className="admin-practice-q__num">Q{q.questionIndex + 1}</span>
                {q.questionText}
              </p>
              <p className="admin-practice-q__response">{q.response}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function AssessmentViewer({ moduleNumber }: { moduleNumber: number }) {
  const results = getAssessmentResults();
  const result = results[String(moduleNumber)];
  const questions = moduleAssessments[moduleNumber] ?? [];

  if (!result) {
    return <p className="admin-empty">No assessment submitted for this module.</p>;
  }

  return (
    <div className="admin-assessment-viewer">
      <div className="admin-assessment-score">
        <span
          className="admin-assessment-score__num"
          style={{ color: result.passed ? "var(--seafoam)" : "var(--coral)" }}
        >
          {result.score}/{result.total}
        </span>
        <span className="admin-assessment-score__pct">
          {Math.round((result.score / result.total) * 100)}%
          &nbsp;·&nbsp;
          {result.passed ? "Passed" : "Did not pass"}
          &nbsp;·&nbsp;
          {formatDate(result.completedAt)}
        </span>
      </div>
      {questions.map((q, i) => {
        const userAnswer = result.answers[q.id] ?? "";
        const selfMark = result.selfAssessed[q.id];
        const isCorrect =
          q.type === "short-answer"
            ? selfMark === true
            : userAnswer === q.correctAnswer;

        const correctOption =
          q.type === "multiple-choice"
            ? q.options?.find((o) => o.id === q.correctAnswer)?.text ?? q.correctAnswer
            : q.type === "true-false"
            ? q.correctAnswer === "true" ? "True" : "False"
            : undefined;

        const userAnswerLabel =
          q.type === "multiple-choice"
            ? q.options?.find((o) => o.id === userAnswer)?.text ?? userAnswer
            : q.type === "true-false"
            ? userAnswer === "true" ? "True" : userAnswer === "false" ? "False" : userAnswer
            : userAnswer;

        return (
          <div
            key={q.id}
            className={`admin-aq ${isCorrect ? "admin-aq--correct" : "admin-aq--wrong"}`}
          >
            <div className="admin-aq__header">
              <span className="admin-aq__num">{i + 1}</span>
              <span className="admin-aq__type">{q.type}</span>
              <span
                className="admin-aq__mark"
                style={{ color: isCorrect ? "var(--seafoam)" : "var(--coral)" }}
              >
                {isCorrect ? "✓" : "✗"}
              </span>
            </div>
            <p className="admin-aq__question">{q.question}</p>
            {q.type === "short-answer" ? (
              <div className="admin-aq__sa">
                <div className="admin-aq__sa-row">
                  <span className="admin-aq__sa-label">Response:</span>
                  <p>{userAnswerLabel || <em>No response recorded</em>}</p>
                </div>
                <div className="admin-aq__sa-row">
                  <span className="admin-aq__sa-label">Self-assessed:</span>
                  <p>
                    {selfMark === true
                      ? "I can explain this concept"
                      : selfMark === false
                      ? "I need to review this"
                      : "—"}
                  </p>
                </div>
                {q.modelAnswer && (
                  <div className="admin-aq__sa-row">
                    <span className="admin-aq__sa-label">Model answer:</span>
                    <p>{q.modelAnswer}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="admin-aq__choices">
                <span className="admin-aq__sa-label">Teacher answered:</span>{" "}
                <span style={{ color: isCorrect ? "var(--seafoam)" : "var(--coral)" }}>
                  {userAnswerLabel || "—"}
                </span>
                {!isCorrect && correctOption && (
                  <>
                    <span className="admin-aq__sa-label" style={{ marginLeft: "1rem" }}>
                      Correct:
                    </span>{" "}
                    <span style={{ color: "var(--seafoam)" }}>{correctOption}</span>
                  </>
                )}
              </div>
            )}
            <p className="admin-aq__explanation">{q.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function Admin() {
  const [progress, setProgress] = useState(getProgress);
  const assessmentResults = getAssessmentResults();
  const practiceEntries = parsePracticeAnswers();
  const [confirmReset, setConfirmReset] = useState(false);

  const totalRecall = Object.values(moduleRecall).reduce((n, qs) => n + qs.length, 0);
  const totalAssessmentQs = Object.values(moduleAssessments).reduce((n, qs) => n + qs.length, 0);
  const passedCount = Object.values(progress).filter((s) => s === "passed").length;

  function handleReset() {
    clearAllData();
    setProgress(getProgress());
    setConfirmReset(false);
  }

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="admin-header">
        <div className="admin-header__inner">
          <div>
            <h1 className="admin-header__title">Teacher Lab Admin</h1>
            <p className="admin-header__sub">
              Program administrator view &nbsp;·&nbsp; Single-teacher local data (Phase 1)
            </p>
          </div>
          <div className="admin-header__actions">
            <button className="admin-btn admin-btn--export" onClick={downloadCsv}>
              ↓ Download Progress Report (CSV)
            </button>
            {!confirmReset ? (
              <button
                className="admin-btn admin-btn--danger"
                onClick={() => setConfirmReset(true)}
              >
                Reset All Progress
              </button>
            ) : (
              <div className="admin-confirm">
                <span>Are you sure? This cannot be undone.</span>
                <button className="admin-btn admin-btn--danger" onClick={handleReset}>
                  Yes, reset everything
                </button>
                <button
                  className="admin-btn admin-btn--cancel"
                  onClick={() => setConfirmReset(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="admin-body">
        {/* Overview cards */}
        <section className="admin-section">
          <h2 className="admin-section__title">Program Overview</h2>
          <div className="admin-stats">
            <StatCard
              label="Modules"
              value={`${passedCount} / ${modules.length} passed`}
              sub="Sequential pathway"
            />
            <StatCard
              label="Assessment questions"
              value={totalAssessmentQs}
              sub={`${modules.length} modules × 10 questions`}
            />
            <StatCard
              label="Recall bank"
              value={totalRecall}
              sub={`${modules.length} modules × 8 questions`}
            />
            <StatCard
              label="Practice responses saved"
              value={practiceEntries.length}
              sub="Across all modules"
            />
          </div>
        </section>

        {/* Progress table */}
        <section className="admin-section">
          <h2 className="admin-section__title">Module Progress</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Status</th>
                  <th>Assessment Score</th>
                  <th>Date Passed</th>
                  <th>Practice Responses</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod) => {
                  const status: ModuleStatus =
                    progress[String(mod.module_number)] ?? "locked";
                  const result = assessmentResults[String(mod.module_number)];
                  const practiceCount = practiceEntries.filter(
                    (e) => e.moduleNumber === mod.module_number,
                  ).length;

                  return (
                    <tr key={mod.module_number} className="admin-table__row">
                      <td className="admin-table__mod-name">
                        <span className="admin-table__mod-num">{mod.module_number}</span>
                        {mod.title}
                      </td>
                      <td>
                        <span
                          className="admin-status-badge"
                          style={{
                            color: statusColor(status),
                            background: statusBg(status),
                          }}
                        >
                          {statusLabel(status)}
                        </span>
                      </td>
                      <td className="admin-table__score">
                        {result ? (
                          <span
                            style={{
                              color: result.passed ? "var(--seafoam)" : "var(--coral)",
                              fontWeight: 600,
                            }}
                          >
                            {result.score}/{result.total}{" "}
                            <span style={{ fontWeight: 400, color: "var(--muted)" }}>
                              ({Math.round((result.score / result.total) * 100)}%)
                            </span>
                          </span>
                        ) : (
                          <span style={{ color: "var(--muted)" }}>—</span>
                        )}
                      </td>
                      <td style={{ color: status === "passed" ? "var(--ink)" : "var(--muted)" }}>
                        {result?.passed && result.completedAt
                          ? formatDate(result.completedAt)
                          : "—"}
                      </td>
                      <td
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          color: practiceCount > 0 ? "var(--ink)" : "var(--muted)",
                        }}
                      >
                        {practiceCount > 0 ? practiceCount : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Practice response viewer */}
        <section className="admin-section">
          <h2 className="admin-section__title">Practice Responses</h2>
          <p className="admin-section__desc">
            All reflection responses saved by the teacher. Expand a module to read the full responses.
          </p>
          {modules.map((mod) => {
            const count = practiceEntries.filter(
              (e) => e.moduleNumber === mod.module_number,
            ).length;
            return (
              <details key={mod.module_number} className="admin-expander">
                <summary className="admin-expander__summary">
                  <span className="admin-expander__mod">
                    Module {mod.module_number} — {mod.title}
                  </span>
                  <span className="admin-expander__count">
                    {count > 0 ? `${count} response${count !== 1 ? "s" : ""}` : "no responses"}
                  </span>
                  <span className="admin-expander__chevron" aria-hidden>›</span>
                </summary>
                <div className="admin-expander__body">
                  <PracticeViewer moduleNumber={mod.module_number} />
                </div>
              </details>
            );
          })}
        </section>

        {/* Assessment detail viewer */}
        <section className="admin-section">
          <h2 className="admin-section__title">Assessment Details</h2>
          <p className="admin-section__desc">
            Full question-by-question results for each submitted assessment.
          </p>
          {modules.map((mod) => {
            const result = assessmentResults[String(mod.module_number)];
            return (
              <details key={mod.module_number} className="admin-expander">
                <summary className="admin-expander__summary">
                  <span className="admin-expander__mod">
                    Module {mod.module_number} — {mod.title}
                  </span>
                  <span
                    className="admin-expander__count"
                    style={{
                      color: result
                        ? result.passed
                          ? "var(--seafoam)"
                          : "var(--coral)"
                        : undefined,
                    }}
                  >
                    {result
                      ? `${result.score}/${result.total} · ${result.passed ? "Passed" : "Did not pass"}`
                      : "not submitted"}
                  </span>
                  <span className="admin-expander__chevron" aria-hidden>›</span>
                </summary>
                <div className="admin-expander__body">
                  <AssessmentViewer moduleNumber={mod.module_number} />
                </div>
              </details>
            );
          })}
        </section>

        {/* Phase 2 notice */}
        <section className="admin-section">
          <div className="admin-phase2">
            <h3 className="admin-phase2__title">Phase 2 — Multi-Teacher Backend</h3>
            <p className="admin-phase2__body">
              Coming soon: cloud database integration so you can track progress across all enrolled teachers.
              Will use Supabase (PostgreSQL + Auth) with per-teacher isolation and admin role access.
              The CSV export structure above matches the planned database schema for seamless migration.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
