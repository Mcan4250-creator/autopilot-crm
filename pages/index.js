import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Direkt ausführen
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Logo + Titel */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="Akbulut Digital Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#1f2937" }}>Autopilot CRM</span>
        </div>

        {/* Navigation */}
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Menu öffnen"
            >
              ☰
            </button>
            {menuOpen && (
              <nav
                style={{
                  position: "absolute",
                  top: "70px",
                  right: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <a href="/" style={navLinkStyle}>Start</a>
                <a href="/termine" style={navLinkStyle}>Termine</a>
                <a href="/einstellungen" style={navLinkStyle}>Einstellungen</a>
              </nav>
            )}
          </>
        ) : (
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={navLinkStyle}>Start</a>
            <a href="/termine" style={navLinkStyle}>Termine</a>
            <a href="/einstellungen" style={navLinkStyle}>Einstellungen</a>
          </nav>
        )}
      </header>

      {/* Hauptinhalt */}
      <main style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
          Digitalisieren Sie Ihre Werkstattprozesse
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#4b5563", marginBottom: "2rem" }}>
          Mit Autopilot CRM verwalten Sie Kunden & Termine in Sekunden.
        </p>
        <a
          href="/termine"
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Jetzt Termin buchen
        </a>
      </main>
    </div>
  );
}

// Navigationslink-Stil
const navLinkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 500,
  display: "block",
  marginBottom: "0.5rem",
};

