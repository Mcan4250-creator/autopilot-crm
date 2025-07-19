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
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="Akbulut Digital Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#1f2937" }}>Autopilot CRM</span>
        </div>

        {/* NAVIGATION */}
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ☰
            </button>

            <div
              style={{
                position: "fixed",
                top: 0,
                right: menuOpen ? 0 : "-100%",
                width: "70%",
                height: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                padding: "2rem 1rem",
                transition: "right 0.3s ease-in-out",
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  alignSelf: "flex-end",
                  fontSize: "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                ✖
              </button>
              <a href="/" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Start</a>
              <a href="/termine" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Termine</a>
              <a href="/einstellungen" onClick={() => setMenuOpen(false)} style={menuLinkStyle}>Einstellungen</a>
            </div>
          </>
        ) : (
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={menuLinkStyle}>Start</a>
            <a href="/termine" style={menuLinkStyle}>Termine</a>
            <a href="/einstellungen" style={menuLinkStyle}>Einstellungen</a>
          </nav>
        )}
      </header>

      {/* MAIN CONTENT */}
     <main style={{ flexGrow: 1, padding: "4rem 1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
  <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937", marginBottom: "2rem", textAlign: "center" }}>
    Willkommen bei Autopilot CRM
  </h1>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "800px"
  }}>
    {/* Kundenverwaltung */}
    <a href="/kunden" style={tileStyle}>
      <div style={iconStyle}>🧾</div>
      <h3 style={tileTitle}>Kundenverwaltung</h3>
      <p style={tileText}>Alle Kundendaten zentral verwalten & durchsuchen</p>
    </a>

    {/* Termine */}
    <a href="/termine" style={tileStyle}>
      <div style={iconStyle}>📅</div>
      <h3 style={tileTitle}>Termine</h3>
      <p style={tileText}>Anstehende Termine ansehen, erstellen & verwalten</p>
    </a>

    {/* Einstellungen */}
    <a href="/einstellungen" style={tileStyle}>
      <div style={iconStyle}>⚙️</div>
      <h3 style={tileTitle}>Einstellungen</h3>
      <p style={tileText}>Benutzerkonto, Öffnungszeiten, Benachrichtigungen</p>
    </a>
  </div>
</main>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#1f2937",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        fontSize: "0.9rem"
      }}>
        © {new Date().getFullYear()} Akbulut Digital – Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

// 👇 Style für alle Links
const menuLinkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1rem",
  marginBottom: "1rem",
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
  fontSize: "1.2rem",
  fontWeight: "600",
  margin: "0.5rem 0 0.25rem 0"
};

const tileText = {
  fontSize: "0.95rem",
  color: "#4b5563",
};

const iconStyle = {
  fontSize: "2rem",
};


