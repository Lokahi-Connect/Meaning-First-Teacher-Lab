import { Link } from "react-router-dom";
import { modules } from "../modules";

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
          <div className="card" key={mod.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "0.25rem",
              }}
            >
              <h3>{mod.title}</h3>
              <span
                className={`badge ${mod.status === "published" ? "badge--published" : "badge--draft"}`}
              >
                {mod.status}
              </span>
            </div>
            <p style={{ marginBottom: "0.5rem", color: "var(--ink)", fontWeight: 500 }}>
              {mod.subtitle}
            </p>
            <p>{mod.summary}</p>
            {mod.status === "published" ? (
              <Link
                to={`/modules/${mod.id}`}
                className="btn-ocean"
                style={{ marginTop: "1rem" }}
              >
                View module →
              </Link>
            ) : (
              <span
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                }}
              >
                Content in development
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
