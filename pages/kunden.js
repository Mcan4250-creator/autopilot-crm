// pages/kunden.js

import { useState } from "react";

export default function Kunden() { const [kunden, setKunden] = useState([ { id: 1, name: "Max Mustermann", kennzeichen: "K-AA 1234", modell: "BMW 3er" }, { id: 2, name: "Lisa Meier", kennzeichen: "D-BB 5678", modell: "VW Golf" }, { id: 3, name: "Ali Yilmaz", kennzeichen: "KÖ-CX 9876", modell: "Mercedes C-Klasse" }, ]);

const [suche, setSuche] = useState(""); const [formularOffen, setFormularOffen] = useState(false); const [neuerKunde, setNeuerKunde] = useState({ name: "", kennzeichen: "", modell: "" }); const [bearbeiteKundeId, setBearbeiteKundeId] = useState(null);

const gefilterteKunden = kunden.filter((kunde) => { const suchbegriff = suche.toLowerCase(); return ( kunde.name.toLowerCase().includes(suchbegriff) || kunde.kennzeichen.toLowerCase().includes(suchbegriff) || kunde.modell.toLowerCase().includes(suchbegriff) ); });

const kundeHinzufuegen = () => { if (!neuerKunde.name || !neuerKunde.kennzeichen || !neuerKunde.modell) return;

if (bearbeiteKundeId) {
  setKunden(kunden.map(k => k.id === bearbeiteKundeId ? { ...k, ...neuerKunde } : k));
  setBearbeiteKundeId(null);
} else {
  const neuer = {
    id: kunden.length + 1,
    ...neuerKunde,
  };
  setKunden([neuer, ...kunden]);
}

setNeuerKunde({ name: "", kennzeichen: "", modell: "" });
setFormularOffen(false);

};

const kundeBearbeiten = (kunde) => { setNeuerKunde({ name: kunde.name, kennzeichen: kunde.kennzeichen, modell: kunde.modell }); setBearbeiteKundeId(kunde.id); setFormularOffen(true); };

const kundeLoeschen = (id) => { if (confirm("Möchtest du diesen Kunden wirklich löschen?")) { setKunden(kunden.filter(k => k.id !== id)); } };

return ( <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}> <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}> Kundenübersicht </h1>

<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", gap: "1rem", flexWrap: "wrap" }}>
    <input
      type="text"
      placeholder="🔍 Suchen..."
      value={suche}
      onChange={(e) => setSuche(e.target.value)}
      style={inputStyle}
    />

    <button
      style={{
        padding: "0.6rem 1.2rem",
        backgroundColor: formularOffen ? "#6b7280" : "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onClick={() => {
        setFormularOffen(!formularOffen);
        setNeuerKunde({ name: "", kennzeichen: "", modell: "" });
        setBearbeiteKundeId(null);
      }}
    >
      {formularOffen ? "✖ Abbrechen" : "+ Kunde hinzufügen"}
    </button>
  </div>

  {formularOffen && (
    <div style={formularStyle}>
      <h3 style={{ marginBottom: "1rem" }}>{bearbeiteKundeId ? "Kunde bearbeiten" : "Neuer Kunde"}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={neuerKunde.name}
          onChange={(e) => setNeuerKunde({ ...neuerKunde, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Kennzeichen"
          value={neuerKunde.kennzeichen}
          onChange={(e) => setNeuerKunde({ ...neuerKunde, kennzeichen: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Fahrzeugmodell"
          value={neuerKunde.modell}
          onChange={(e) => setNeuerKunde({ ...neuerKunde, modell: e.target.value })}
          style={inputStyle}
        />
        <button onClick={kundeHinzufuegen} style={{ ...inputStyle, backgroundColor: "#10b981", color: "white", fontWeight: 600 }}>
          {bearbeiteKundeId ? "Änderungen speichern" : "Speichern"}
        </button>
      </div>
    </div>
  )}

  <div style={{ display: "grid", gap: "1rem" }}>
    {gefilterteKunden.length > 0 ? (
      gefilterteKunden.map((kunde) => (
        <div
          key={kunde.id}
          style={kundenBox}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>{kunde.name}</h3>
            <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>Kennzeichen: {kunde.kennzeichen}</p>
            <p style={{ margin: 0, color: "#4b5563" }}>Fahrzeug: {kunde.modell}</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => kundeBearbeiten(kunde)}
              style={{ padding: "0.4rem 0.8rem", backgroundColor: "#fbbf24", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              ✏️ Bearbeiten
            </button>
            <button
              onClick={() => kundeLoeschen(kunde.id)}
              style={{ padding: "0.4rem 0.8rem", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              🗑 Löschen
            </button>
          </div>
        </div>
      ))
    ) : (
      <p style={{ color: "#6b7280" }}>Keine Kunden gefunden.</p>
    )}
  </div>
</div>

); }

const inputStyle = { padding: "0.6rem 1rem", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem", flexGrow: 1, minWidth: "250px", };

const formularStyle = { marginBottom: "2rem", backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", };

const kundenBox = { padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", };



    