export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="Akbulut Digital Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "#1f2937" }}>Autopilot CRM</span>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Start</a>
          <a href="/termine" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Termine</a>
          <a href="/einstellungen" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Einstellungen</a>
        </nav>
      </header>

      {/* Hauptinhalt */}
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
        backgroundColor: "#f9fafb",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#111827", marginBottom: "1rem" }}>
          Willkommen bei Autopilot CRM
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4b5563" }}>
          Ihre smarte Kundenverwaltung für die Werkstatt.
        </p>
      </main>
    </div>
  );
}
