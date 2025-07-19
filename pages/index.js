import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif"
    }}>
      <nav style={{ marginBottom: "40px" }}>
        <Link href="/" style={{ margin: "0 20px", textDecoration: "none", color: "#0070f3" }}>Start</Link>
        <Link href="/termine" style={{ margin: "0 20px", textDecoration: "none", color: "#0070f3" }}>Termine</Link>
        <Link href="/einstellungen" style={{ margin: "0 20px", textDecoration: "none", color: "#0070f3" }}>Einstellungen</Link>
      </nav>

      <img
        src="/Logo.png"
        alt="Akbulut Digital Logo"
        width="150"
        style={{ marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
        Willkommen bei Autopilot CRM
      </h1>
    </div>
  );
}
