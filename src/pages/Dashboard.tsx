import { Link } from "react-router-dom";
import { modules } from "../modules";

export default function Dashboard() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Your certification dashboard</h1>
          <p>
            Track your progress through the Meaning-First Literacy™ teacher
            certification pathway.
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
            const available = mod.id === 1;
            return (
              <div className="card" key={mod.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3>{mod.title}</h3>
                  <span
                    className={`badge ${available ? "badge--available" : "badge--locked"}`}
                  >
                    {available ? "Available" : "Locked"}
                  </span>
                </div>
                <p>{mod.summary}</p>
                {available && (
                  <Link
                    to={`/modules/${mod.id}`}
                    style={{
                      display: "inline-block",
                      marginTop: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    Start module &rarr;
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
