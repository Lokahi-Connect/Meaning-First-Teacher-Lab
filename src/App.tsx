import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Modules from "./pages/Modules";
import ModuleView from "./pages/ModuleView";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:id" element={<ModuleView />} />
      </Routes>
      <Footer />
    </>
  );
}
