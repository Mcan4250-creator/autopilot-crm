// pages/index.js

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/Logo.png" alt="AkbulutCRM Logo" style={{ height: 40 }} />
          <span style={{ fontSize: "1.4rem", fontWeight: 600, color: "#1f2937" }}>AkbulutCRM</span>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Start</a>
          <a href="/termine" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Termine</a>
          <a href="/einstellungen" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Einstellungen</a>
        </nav>
      </header>

      {/* Main */}
      <main style={{ padding: "3rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1f2937" }}>
          Willkommen bei AkbulutCRM
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4b5563", marginTop: "1rem" }}>
          Ihre smarte Kundenverwaltung für die Werkstatt.
        </p>

        {/* Tiles */}
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
    </div>
  );
}

// Style für alle Tiles
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

