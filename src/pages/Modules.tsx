import { Link } from "react-router-dom";
import { modules } from "../modules";

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default function Modules() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">6-Module Curriculum</span>
          <h1>Certification Modules</h1>
          <p>
            Six modules covering the foundations of Structured Word Inquiry and
            meaning-first literacy instruction.
          </p>
        </div>
      </section>

      <div className="page-wrap">
        {modules.map((mod) => (
          <div className="card" key={mod.module_id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "0.25rem",
                gap: "0.75rem",
              }}
            >
              <h3>{mod.title}</h3>
              <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {mod.estimated_duration_minutes && (
                  <span className="badge badge--draft">
                    {formatDuration(mod.estimated_duration_minutes)}
                  </span>
                )}
                <span
                  className={`badge ${mod.status === "published" ? "badge--published" : "badge--draft"}`}
                >
                  {mod.status}
                </span>
              </div>
            </div>
            {mod.subtitle && (
              <p style={{ marginBottom: "0.5rem", color: "var(--ink)", fontWeight: 500 }}>
                {mod.subtitle}
              </p>
            )}
            <p>{mod.summary}</p>
            {mod.status === "published" ? (
              <Link
                to={`/modules/${mod.module_number}`}
                className="btn-ocean"
                style={{ marginTop: "1rem" }}
              >
                View module →
              </Link>
            ) : (
              <Link
                to={`/modules/${mod.module_number}`}
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                }}
              >
                Preview outcomes →
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
