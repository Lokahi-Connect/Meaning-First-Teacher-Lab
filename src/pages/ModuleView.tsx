import { useParams, Link } from "react-router-dom";
import { modules } from "../modules";

export default function ModuleView() {
  const { id } = useParams<{ id: string }>();
  const mod = modules.find((m) => m.id === Number(id));

  if (!mod) {
    return (
      <div className="page-wrap" style={{ paddingTop: "2rem" }}>
        <h1>Module not found</h1>
        <p style={{ marginTop: "0.5rem" }}>
          <Link to="/modules">&larr; Back to modules</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>{mod.title}</h1>
          <p>{mod.subtitle}</p>
          <div className="hero-meta">
            <span
              className={`badge ${mod.status === "published" ? "badge--published" : "badge--draft"}`}
            >
              {mod.status}
            </span>
          </div>
        </div>
      </section>

      <div className="page-wrap">
        <p style={{ marginBottom: "1rem" }}>
          <Link to="/modules">&larr; Back to modules</Link>
        </p>

        <div className="card">
          <h3>About this module</h3>
          <p>{mod.summary}</p>
        </div>

        {mod.status === "draft" && (
          <div className="placeholder-notice" style={{ marginTop: "1rem" }}>
            This module is still in development. Content will be available soon.
          </div>
        )}
      </div>
    </>
  );
}
