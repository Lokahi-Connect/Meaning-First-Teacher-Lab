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
        </div>
      </div>
    </footer>
  );
}
