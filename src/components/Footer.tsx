import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">
          Lokahi <span>Connect</span>
        </span>
        <div className="footer-meta">
          <p>501(c)(3) Nonprofit &middot; EIN: 33-3985311</p>
          <p>&copy; {new Date().getFullYear()} Lokahi Connect. All rights reserved.</p>
        </div>
        <div className="footer-meta">
          <p>
            <a
              href="https://www.lokahiconnect.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              lokahiconnect.org
            </a>{" "}
            &middot;{" "}
            <a href="mailto:info@lokahiconnect.org">info@lokahiconnect.org</a>
          </p>
          <p style={{ marginTop: "0.35rem" }}>
            <Link
              to="/admin"
              style={{ fontSize: "0.75rem", color: "inherit", opacity: 0.45 }}
            >
              Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
