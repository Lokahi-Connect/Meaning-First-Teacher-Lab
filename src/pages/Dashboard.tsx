import { Link } from "react-router-dom";
import { modules } from "../modules";

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default function Dashboard() {
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
            Complete all six modules to earn your Meaning-First Literacy™ Teacher
            Certification. Modules unlock sequentially as you progress through
            the pathway.
          </p>
        </div>

        <h2 style={{ marginBottom: "1rem" }}>Module Pathway</h2>
        <div className="module-grid">
          {modules.map((mod) => {
            const available = mod.status === "published";
            return (
              <div className="card" key={mod.module_id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.5rem",
                    gap: "0.5rem",
                  }}
                >
                  <h3>{mod.title}</h3>
                  <span
                    className={`badge ${available ? "badge--available" : "badge--locked"}`}
                    style={{ flexShrink: 0 }}
                  >
                    {available ? "Available" : "Coming soon"}
                  </span>
                </div>
                <p>{mod.summary}</p>
                {mod.estimated_duration_minutes && (
                  <p
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                    }}
                  >
                    {formatDuration(mod.estimated_duration_minutes)}
                  </p>
                )}
                {available ? (
                  <Link
                    to={`/modules/${mod.module_number}`}
                    className="btn-primary"
                    style={{ marginTop: "1rem" }}
                  >
                    Start module →
                  </Link>
                ) : (
                  <Link
                    to={`/modules/${mod.module_number}`}
                    style={{
                      display: "inline-block",
                      marginTop: "0.75rem",
                      color: "var(--muted)",
                      fontSize: "0.88rem",
                    }}
                  >
                    Preview outcomes →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
