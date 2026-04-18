import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { modules } from "../modules";
import { getProgress, type ModuleStatus } from "../utils/progress";

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

function statusLabel(status: ModuleStatus): string {
  if (status === "passed") return "Completed";
  if (status === "in-progress") return "In progress";
  if (status === "available") return "Available";
  return "Locked";
}

function statusBadgeClass(status: ModuleStatus): string {
  if (status === "passed") return "badge--completed";
  if (status === "in-progress") return "badge--in-progress";
  if (status === "available") return "badge--available";
  return "badge--locked";
}

function completedCount(progress: Record<string, ModuleStatus>): number {
  return Object.values(progress).filter((s) => s === "passed").length;
}

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, ModuleStatus>>({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const done = completedCount(progress);
  const total = modules.length;

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Teacher Certification</span>
          <h1>
            Your <em>Meaning-First</em> Certification Dashboard
          </h1>
          <p>
            Track your progress through the Meaning-First Literacy™ teacher
            certification pathway powered by Structured Word Inquiry.
          </p>
        </div>
      </section>

      <div className="page-wrap">
        <div className="principle-block">
          <h2>Certification Status</h2>
          <p>
            {done === total
              ? "All six modules complete — your certification is ready."
              : `${done} of ${total} modules complete. Complete all six module assessments to earn your Meaning-First Literacy™ Teacher Certification. Modules unlock sequentially as you progress.`}
          </p>
        </div>

        {done > 0 && (
          <div
            style={{
              background: "var(--white)",
              borderRadius: "0.75rem",
              padding: "0.85rem 1.5rem",
              marginBottom: "1.25rem",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--muted)" }}>
              Progress
            </span>
            <div style={{ flex: 1, height: "8px", background: "var(--sand)", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${(done / total) * 100}%`,
                  background: "var(--seafoam)",
                  borderRadius: "4px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--seafoam)", fontWeight: 700 }}>
              {done}/{total}
            </span>
          </div>
        )}

        <h2 style={{ marginBottom: "1rem" }}>Module Pathway</h2>
        <div className="module-grid">
          {modules.map((mod) => {
            const status: ModuleStatus = progress[String(mod.module_number)] ?? "locked";
            const isAccessible = status !== "locked";

            return (
              <div
                className={`module-card--${status}`}
                key={mod.module_id}
                style={{ position: "relative" }}
              >
                <div
                  className="card"
                  style={{
                    marginBottom: 0,
                    borderLeft: status === "passed"
                      ? "3px solid var(--seafoam)"
                      : status === "in-progress"
                      ? "3px solid var(--dusk)"
                      : undefined,
                    opacity: status === "locked" ? 0.72 : 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                      gap: "0.5rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1rem" }}>{mod.title}</h3>
                    <span className={`badge ${statusBadgeClass(status)}`} style={{ flexShrink: 0 }}>
                      {statusLabel(status)}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--muted)" }}>{mod.summary}</p>

                  {mod.estimated_duration_minutes && (
                    <p
                      style={{
                        marginTop: "0.5rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--muted)",
                      }}
                    >
                      {formatDuration(mod.estimated_duration_minutes)}
                    </p>
                  )}

                  {isAccessible ? (
                    <Link
                      to={`/modules/${mod.module_number}`}
                      className="btn-primary"
                      style={{ marginTop: "1rem", fontSize: "0.88rem", padding: "0.6rem 1.4rem" }}
                    >
                      {status === "passed"
                        ? "Review module"
                        : status === "in-progress"
                        ? "Continue →"
                        : "Start module →"}
                    </Link>
                  ) : (
                    <div
                      style={{
                        marginTop: "0.75rem",
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      ⊘ Complete Module {mod.module_number - 1} to unlock
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
