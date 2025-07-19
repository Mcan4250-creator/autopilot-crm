export default function Home() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="Akbulut Digital Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#1f2937" }}>Autopilot CRM</span>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Start</a>
          <a href="/termine" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Termine</a>
          <a href="/einstellungen" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Einstellungen</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", textAlign: "center" }}>
          Willkommen bei Autopilot CRM
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#4b5563", textAlign: "center" }}>
          Ihre smarte Kundenverwaltung für die Werkstatt.
        </p>
        <button style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Jetzt Termin buchen
        </button>
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
