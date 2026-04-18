import { useParams, Link } from "react-router-dom";
import { modules } from "../modules";

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default function ModuleView() {
  const { id } = useParams<{ id: string }>();
  const mod = modules.find((m) => m.module_number === Number(id));

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

  const isPublished = mod.status === "published";

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Module {mod.module_number} of 6</span>
          <h1>{mod.title}</h1>
          {mod.subtitle && <p>{mod.subtitle}</p>}
          <div className="hero-meta" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <span
              className={`badge ${isPublished ? "badge--published" : "badge--draft"}`}
            >
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

        {/* Summary */}
        <div className="card">
          <h3>About this module</h3>
          <p>{mod.summary}</p>
          {mod.format && (
            <p style={{ marginTop: "0.75rem", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
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
                style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--ink)" }}
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
                style={{ fontSize: "0.93rem", color: "var(--ink)", paddingLeft: "1.1rem", position: "relative", lineHeight: 1.55 }}
              >
                <span style={{ position: "absolute", left: 0, color: "var(--seafoam)", fontWeight: 700 }}>·</span>
                {concept}
              </li>
            ))}
          </ul>
        </div>

        {/* Sections outline */}
        {mod.sections && mod.sections.length > 0 && (
          <div className="card">
            <h3 style={{ marginBottom: "1rem" }}>What you'll study</h3>
            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
              {mod.sections.map((section, i) => (
                <li
                  key={section.section_number}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.9rem 0",
                    borderBottom: i < mod.sections!.length - 1 ? "1px solid var(--border)" : "none",
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
                    <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem", marginBottom: section.summary ? "0.25rem" : 0 }}>
                      {section.title}
                    </p>
                    {section.summary && (
                      <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6 }}>
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
              ))}
            </ol>
          </div>
        )}

        {/* Assessment gate */}
        {mod.assessment && (
          <div className="principle-block">
            <h2>Assessment gate</h2>
            <p>
              {mod.assessment.question_count} questions &middot; pass {mod.assessment.passing_score}/{mod.assessment.question_count} ({mod.assessment.passing_percentage}%)
              {" · "}{mod.assessment.question_types.join(", ")}
              {mod.assessment.gates_reflection && " · unlocks written reflection"}
            </p>
          </div>
        )}

        {/* Sections-not-yet-authored notice — shown only when sections are missing */}
        {(!mod.sections || mod.sections.length === 0) && (
          <div className="placeholder-notice" style={{ marginTop: "0.5rem" }}>
            Lesson sections are being authored. Outcomes and key concepts above
            are finalized.
          </div>
        )}

        {/* References — collapsed by default */}
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
              <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {mod.references.map((ref, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65, fontFamily: "var(--font-mono)" }}
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
