// pages/index.js

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.png" alt="Akbulut Digital Logo" width="40" />
          <span style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>Autopilot CRM</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={navLink}>Start</a>
          <a href="/termine" style={navLink}>Termine</a>
          <a href="/einstellungen" style={navLink}>Einstellungen</a>
        </nav>
      </header>

      {/* Content */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#222', marginBottom: '1rem' }}>
          Willkommen bei Autopilot CRM
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666' }}>
          Deine moderne Software für einfache Terminverwaltung
        </p>
      </main>
    </div>
  );
}

const navLink = {
  color: '#0070f3',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
};
