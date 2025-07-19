// pages/index.js

import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <header style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="AkbulutCRM Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.4rem", fontWeight: 600, color: "#1f2937" }}>AkbulutCRM</span>
        </div>

        {/* Navigation */}
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}
            >
              ☰
            </button>
            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  padding: "1rem",
                  zIndex: 20,
                }}
              >
                <a href="/" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Start</a><br />
                <a href="/termine" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Termine</a><br />
                <a href="/einstellungen" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Einstellungen</a>
              </div>
            )}
          </>
        ) : (
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={menuLinkStyle}>Start</a>
            <a href="/termine" style={menuLinkStyle}>Termine</a>
            <a href="/einstellungen" style={menuLinkStyle}>Einstellungen</a>
          </nav>
        )}
      </header>

      {/* MAIN */}
      <main style={{ flexGrow: 1, padding: "3rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1f2937" }}>
          Willkommen bei AkbulutCRM
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4b5563", marginTop: "1rem" }}>
          Ihre smarte Kundenverwaltung für die Werkstatt.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <a href="/" style={tileStyle}>
            <div style={tileIcon}>🗒️</div>
            <div style={tileTitle}>Kundenverwaltung</div>
            <p style={tileText}>Alle Kundendaten zentral verwalten & durchsuchen</p>
          </a>

          <a href="/termine" style={tileStyle}>
            <div style={tileIcon}>📅</div>
            <div style={tileTitle}>Termine</div>
            <p style={tileText}>Anstehende Termine ansehen, erstellen & verwalten</p>
          </a>

          <a href="/einstellungen" style={tileStyle}>
            <div style={tileIcon}>⚙️</div>
            <div style={tileTitle}>Einstellungen</div>
            <p style={tileText}>Benutzerkonto, Öffnungszeiten, Benachrichtigungen</p>
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#1f2937", color: "#fff", textAlign: "center", padding: "1rem", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} AkbulutCRM – Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

const menuLinkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1rem",
  marginBottom: "0.5rem",
  display: "inline-block",
};

const tileStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  padding: "1.5rem",
  textDecoration: "none",
  color: "#1f2937",
  transition: "transform 0.2s",
};

const tileTitle = {
  fontSize: "1.3rem",
  fontWeight: 600,
  marginTop: "1rem",
};

const tileText = {
  fontSize: "1rem",
  marginTop: "0.5rem",
  color: "#4b5563",
};

const tileIcon = {
  fontSize: "2rem",
};

