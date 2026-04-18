import { useLocation } from "react-router-dom";
import { modules } from "../modules";

function pageLabel(pathname: string): string {
  if (pathname === "/") return "Dashboard";
  if (pathname === "/modules") return "Modules";
  if (pathname === "/register") return "Registration";
  const m = pathname.match(/^\/modules\/(\d+)$/);
  if (m) {
    const mod = modules.find((x) => x.module_number === Number(m[1]));
    return mod ? mod.title : "Module";
  }
  return "Teacher-Lab";
}

export default function FeedbackButton() {
  const { pathname } = useLocation();
  const subject = encodeURIComponent(`Teacher-Lab feedback: ${pageLabel(pathname)}`);

  return (
    <a
      href={`mailto:info@lokahiconnect.org?subject=${subject}`}
      className="feedback-btn"
      aria-label="Send feedback"
    >
      Send feedback
    </a>
  );
}
