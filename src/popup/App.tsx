import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Wallet } from "./pages/Wallet";
import { Settings } from "./pages/Settings";

export function App() {
  return (
    <MemoryRouter>
      <nav style={{ padding: "8px 16px", borderBottom: "1px solid #eee" }}>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/wallet" style={{ marginRight: 12 }}>
          Wallet
        </Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MemoryRouter>
  );
}
