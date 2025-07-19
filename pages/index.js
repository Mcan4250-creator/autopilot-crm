export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
      }}>
        {/* Logo und App-Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/Logo.png" alt="Logo" style={{ height: "60px" }} />
          <span style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1f2937" }}>Autopilot CRM</span>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "2rem" }}>
          <a href="/" style={navStyle}>Start</a>
          <a href="/termine" style={navStyle}>Termine</a>
          <a href="/einstellungen" style={navStyle}>Einstellungen</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem"
      }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
          Willkommen bei Autopilot CRM
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#4b5563" }}>
          Ihre smarte Kundenverwaltung für die Werkstatt.
        </p>
      </section>
    </div>
  );
}

const navStyle = {
  textDecoration: "none",
  fontSize: "1rem",
  color: "#2563eb",
  fontWeight: 500,
  padding: "0.5rem 0",
  transition: "color 0.2s ease",
};
