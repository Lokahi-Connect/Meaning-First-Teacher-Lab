import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { modules } from "../modules";
import { lessonContent } from "../lessons";
import { modulePractice } from "../data/practice";
import { chunkRetrieval, type RetrievalSplit } from "../data/chunkRetrieval";
import ModuleAssessment from "../components/ModuleAssessment";
import RecallPractice from "../components/RecallPractice";
import {
  getModuleStatus,
  markModuleViewed,
  getPracticeAnswers,
  savePracticeAnswer,
  type ModuleStatus,
} from "../utils/progress";

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

// ── In-lesson retrieval ──────────────────────────────────────────────────────

interface InLessonRetrievalProps {
  question: string;
  answer: string;
}

function InLessonRetrieval({ question, answer }: InLessonRetrievalProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="inline-retrieval">
      <div className="inline-retrieval__label">
        <span className="inline-retrieval__icon">↻</span>
        Pause and retrieve
      </div>
      <p className="inline-retrieval__question">{question}</p>
      {!revealed ? (
        <button className="inline-retrieval__check" onClick={() => setRevealed(true)}>
          Check answer ↓
        </button>
      ) : (
        <div className="inline-retrieval__answer">
          <span className="inline-retrieval__answer-label">Answer</span>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Chunk splitting ──────────────────────────────────────────────────────────

function splitMarkdown(
  markdown: string,
  splits: RetrievalSplit[],
): { content: string; retrieval?: { question: string; answer: string } }[] {
  if (!splits.length) return [{ content: markdown }];

  const chunks: { content: string; retrieval?: { question: string; answer: string } }[] = [];
  let remaining = markdown;

  for (const split of splits) {
    const idx = remaining.indexOf(split.splitAt);
    if (idx === -1) continue;
    const chunk = remaining.slice(0, idx).trim();
    if (chunk) {
      chunks.push({ content: chunk, retrieval: { question: split.question, answer: split.answer } });
    }
    remaining = remaining.slice(idx).trim();
  }

  if (remaining.trim()) {
    chunks.push({ content: remaining.trim() });
  }

  return chunks.filter((c) => c.content.length > 0);
}

// ── Chunked lesson renderer ──────────────────────────────────────────────────

interface ChunkedLessonProps {
  body: string;
  moduleNumber: number;
  sectionNumber: number;
}

function ChunkedLesson({ body, moduleNumber, sectionNumber }: ChunkedLessonProps) {
  const splits = chunkRetrieval[moduleNumber]?.[sectionNumber] ?? [];
  const chunks = splitMarkdown(body, splits);

  return (
    <>
      {chunks.map((chunk, i) => (
        <div key={i}>
          <div className="lesson-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{chunk.content}</ReactMarkdown>
          </div>
          {chunk.retrieval && (
            <InLessonRetrieval
              question={chunk.retrieval.question}
              answer={chunk.retrieval.answer}
            />
          )}
        </div>
      ))}
    </>
  );
}

// ── Section practice ─────────────────────────────────────────────────────────

interface SectionPracticeProps {
  moduleNumber: number;
  sectionNumber: number;
}

function SectionPractice({ moduleNumber, sectionNumber }: SectionPracticeProps) {
  const questions = modulePractice[moduleNumber]?.[sectionNumber] ?? [];
  if (questions.length === 0) return null;

  const savedAnswers = getPracticeAnswers();
  const [answers, setAnswers] = useState<string[]>(
    questions.map((_, i) => savedAnswers[`m${moduleNumber}_s${sectionNumber}_q${i}`] ?? ""),
  );

  const handleChange = useCallback(
    (i: number, value: string) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[i] = value;
        return next;
      });
      savePracticeAnswer(`m${moduleNumber}_s${sectionNumber}_q${i}`, value);
    },
    [moduleNumber, sectionNumber],
  );

  return (
    <div className="practice-section">
      <span className="practice-section__label">Practice — for your reflection</span>
      <p className="practice-section__note">
        These questions are for your own consolidation. Write as much or as little as you need.
        Your answers are saved automatically and are not submitted or graded.
        The module assessment at the bottom of this page is separate.
      </p>
      {questions.map((q, i) => (
        <div key={i} className="practice-question">
          <p className="practice-question__text">
            <span className="practice-question__num">{i + 1}.</span>
            {q}
          </p>
          <textarea
            className="practice-textarea"
            rows={3}
            value={answers[i]}
            placeholder="Your thoughts..."
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

// ── Main view ────────────────────────────────────────────────────────────────

export default function ModuleView() {
  const { id } = useParams<{ id: string }>();
  const mod = modules.find((m) => m.module_number === Number(id));
  const [moduleStatus, setModuleStatus] = useState<ModuleStatus>("locked");

  useEffect(() => {
    if (!mod) return;
    const status = getModuleStatus(mod.module_number);
    setModuleStatus(status);
    markModuleViewed(mod.module_number);
  }, [mod]);

  if (!mod) {
    return (
      <div
        className="page-wrap"
        style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }}
      >
        <h1>Module not found</h1>
        <p style={{ marginTop: "0.5rem" }}>
          <Link to="/modules">← Back to modules</Link>
        </p>
      </div>
    );
  }

  const moduleLessons = lessonContent[mod.module_number];
  const hasLessons = moduleLessons && Object.keys(moduleLessons).length > 0;
  const isPublished = mod.status === "published";
  const showRecall = mod.module_number > 1;

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Module {mod.module_number} of 6</span>
          <h1>{mod.title}</h1>
          {mod.subtitle && <p>{mod.subtitle}</p>}
          <div
            className="hero-meta"
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "1.25rem",
            }}
          >
            <span className={`badge ${isPublished ? "badge--published" : "badge--draft"}`}>
              {mod.status}
            </span>
            {mod.estimated_duration_minutes && (
              <span className="badge badge--draft">
                {formatDuration(mod.estimated_duration_minutes)}
              </span>
            )}
            {mod.student_band_connections && mod.student_band_connections.length > 0 && (
              <span className="badge badge--draft">
                Grades {mod.student_band_connections.join(", ")}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="page-wrap">
        <p style={{ marginBottom: "1.5rem" }}>
          <Link to="/modules">← Back to modules</Link>
        </p>

        {/* Spaced retrieval — shown for modules 2–6 */}
        {showRecall && <RecallPractice currentModule={mod.module_number} />}

        {/* Summary */}
        <div className="card">
          <h3>About this module</h3>
          <p>{mod.summary}</p>
          {mod.format && (
            <p
              style={{
                marginTop: "0.75rem",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
              }}
            >
              {mod.format}
            </p>
          )}
        </div>

        {/* Learning Outcomes */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Learning outcomes</h3>
          <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {mod.learning_outcomes.map((outcome, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  alignItems: "flex-start",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--ink)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "1.5rem",
                    height: "1.5rem",
                    background: "rgba(46,196,160,0.15)",
                    border: "1px solid rgba(46,196,160,0.35)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--seafoam)",
                  }}
                >
                  {i + 1}
                </span>
                {outcome}
              </li>
            ))}
          </ol>
        </div>

        {/* Key Concepts */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Key concepts</h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {mod.key_concepts.map((concept, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.93rem",
                  color: "var(--ink)",
                  paddingLeft: "1.1rem",
                  position: "relative",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{ position: "absolute", left: 0, color: "var(--seafoam)", fontWeight: 700 }}
                >
                  ·
                </span>
                {concept}
              </li>
            ))}
          </ul>
        </div>

        {/* Sections — expandable when lesson bodies exist */}
        {mod.sections && mod.sections.length > 0 && (
          <div className="card">
            <h3 style={{ marginBottom: hasLessons ? "0.5rem" : "1rem" }}>
              {hasLessons ? "Module content" : "What you'll study"}
            </h3>
            {hasLessons && (
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1rem" }}>
                Select a section to read the full lesson. Retrieval prompts appear within each lesson. Practice questions appear after.
              </p>
            )}
            <ol
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {mod.sections.map((section, i) => {
                const body = moduleLessons?.[section.section_number];
                const isLast = i === mod.sections!.length - 1;
                const hasPractice =
                  (modulePractice[mod.module_number]?.[section.section_number] ?? []).length > 0;

                if (body) {
                  return (
                    <li
                      key={section.section_number}
                      style={{ borderBottom: isLast ? "none" : "1px solid var(--border)" }}
                    >
                      <details className="section-details">
                        <summary className="section-summary">
                          <span className="section-num">
                            {String(section.section_number).padStart(2, "0")}
                          </span>
                          <span className="section-summary-text">
                            <span className="section-title">{section.title}</span>
                            {section.summary && (
                              <span className="section-desc">{section.summary}</span>
                            )}
                          </span>
                          <span className="section-meta">
                            {section.has_comprehension_check && (
                              <span className="badge badge--draft">quiz</span>
                            )}
                            {hasPractice && (
                              <span className="badge badge--in-progress">practice</span>
                            )}
                            <span className="section-chevron" aria-hidden="true">
                              ›
                            </span>
                          </span>
                        </summary>
                        <ChunkedLesson
                          body={body}
                          moduleNumber={mod.module_number}
                          sectionNumber={section.section_number}
                        />
                        {hasPractice && (
                          <SectionPractice
                            moduleNumber={mod.module_number}
                            sectionNumber={section.section_number}
                          />
                        )}
                      </details>
                    </li>
                  );
                }

                // Fallback: non-expandable outline row
                return (
                  <li
                    key={section.section_number}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "0.9rem 0",
                      borderBottom: isLast ? "none" : "1px solid var(--border)",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        paddingTop: "0.15rem",
                        minWidth: "2rem",
                      }}
                    >
                      {String(section.section_number).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "var(--ink)",
                          fontSize: "0.95rem",
                          marginBottom: section.summary ? "0.25rem" : 0,
                        }}
                      >
                        {section.title}
                      </p>
                      {section.summary && (
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--muted)",
                            lineHeight: 1.6,
                          }}
                        >
                          {section.summary}
                        </p>
                      )}
                    </div>
                    {section.has_comprehension_check && (
                      <span
                        className="badge badge--draft"
                        style={{ marginLeft: "auto", flexShrink: 0, alignSelf: "center" }}
                      >
                        quiz
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        {/* Assessment */}
        {mod.assessment && (
          <div className="card assessment-wrapper">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0 }}>Module Assessment</h3>
              {moduleStatus === "passed" && (
                <span className="badge badge--completed">Passed</span>
              )}
            </div>
            {moduleStatus !== "passed" && (
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1.25rem", lineHeight: 1.65 }}>
                Read all sections before taking this assessment. You need{" "}
                {mod.assessment.passing_score}/{mod.assessment.question_count} correct (
                {mod.assessment.passing_percentage}%) to pass and unlock the next module.
              </p>
            )}
            {mod.gate_criteria && mod.gate_criteria.length > 0 && moduleStatus !== "passed" && (
              <details style={{ marginBottom: "1.25rem" }}>
                <summary
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    cursor: "pointer",
                    userSelect: "none",
                    fontWeight: 600,
                  }}
                >
                  What passing demonstrates ({mod.gate_criteria.length} criteria)
                </summary>
                <ul
                  style={{
                    marginTop: "0.75rem",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {mod.gate_criteria.map((criterion, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                        paddingLeft: "1rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--seafoam)",
                          fontWeight: 700,
                        }}
                      >
                        ·
                      </span>
                      {criterion}
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <ModuleAssessment
              moduleNumber={mod.module_number}
              onPassed={() => setModuleStatus("passed")}
            />
          </div>
        )}

        {/* Sections-not-yet-authored notice */}
        {(!mod.sections || mod.sections.length === 0) && (
          <div className="placeholder-notice" style={{ marginTop: "0.5rem" }}>
            Lesson sections are being authored. Outcomes and key concepts above are finalized.
          </div>
        )}

        {/* References */}
        {mod.references && mod.references.length > 0 && (
          <div className="card" style={{ marginTop: "1rem" }}>
            <details>
              <summary
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                References ({mod.references.length})
              </summary>
              <ol
                style={{
                  marginTop: "1rem",
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {mod.references.map((ref, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.83rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {ref}
                  </li>
                ))}
              </ol>
            </details>
          </div>
        )}
      </div>
    </>
  );
}
