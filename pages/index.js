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
      <img
        src="/logo.png"
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
