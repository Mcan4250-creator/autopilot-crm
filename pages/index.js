export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="Akbulut Digital Logo" style={{ height: 50 }} />
          <span style={{ fontSize: "1.4rem", fontWeight: "600", color: "#1f2937" }}>Autopilot CRM</span>
        </div>
      <nav style={{ display: "flex", gap: "2rem" }}>
  {[
    { name: "Start", path: "/" },
    { name: "Termine", path: "/termine" },
    { name: "Einstellungen", path: "/einstellungen" },
  ].map((item) => (
    <a
      key={item.path}
      href={item.path}
      style={{
        color: window.location.pathname === item.path ? "#1f2937" : "#2563eb",
        fontWeight: window.location.pathname === item.path ? "700" : "500",
        textDecoration: "none",
        paddingBottom: "4px",
        borderBottom:
          window.location.pathname === item.path
            ? "2px solid #2563eb"
            : "2px solid transparent",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.target.style.color = "#1e40af")
      }
      onMouseLeave={(e) =>
        (e.target.style.color =
          window.location.pathname === item.path ? "#1f2937" : "#2563eb")
      }
    >
      {item.name}
    </a>
  ))}
</nav>
      </header>

      {/* Hero Section */}
      <main style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#1f2937", marginBottom: "1rem" }}>
          Digitalisieren Sie Ihre Werkstattprozesse
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#4b5563", marginBottom: "2rem" }}>
          Mit Autopilot CRM verwalten Sie Kunden & Termine in Sekunden.
        </p>
        <a href="/termine" style={{
          display: "inline-block",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "1rem",
          textDecoration: "none"
        }}>
          Jetzt Termin buchen
        </a>
      </main>
    </div>
  );
}
