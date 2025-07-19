// pages/kunden.js

import { useState } from "react";

export default function Kunden() { const [kunden, setKunden] = useState([ { id: 1, name: "Max Mustermann", kennzeichen: "K-AA 1234", modell: "BMW 3er" }, { id: 2, name: "Lisa Meier", kennzeichen: "D-BB 5678", modell: "VW Golf" }, { id: 3, name: "Ali Yilmaz", kennzeichen: "KÖ-CX 9876", modell: "Mercedes C-Klasse" }, ]); const [suche, setSuche] = useState("");

const gefilterteKunden = kunden.filter((kunde) => { const suchbegriff = suche.toLowerCase(); return ( kunde.name.toLowerCase().includes(suchbegriff) || kunde.kennzeichen.toLowerCase().includes(suchbegriff) || kunde.modell.toLowerCase().includes(suchbegriff) ); });

return ( <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}> <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}> Kundenübersicht </h1>

<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", gap: "1rem", flexWrap: "wrap" }}>
    <input
      type="text"
      placeholder="🔍 Suchen..."
      value={suche}
      onChange={(e) => setSuche(e.target.value)}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        flexGrow: 1,
        minWidth: "250px",
      }}
    />

    <button
      style={{
        padding: "0.6rem 1.2rem",
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onClick={() => alert("Hier kommt später das Formular zum Hinzufügen eines Kunden")}
    >
      + Kunde hinzufügen
    </button>
  </div>

  <div style={{ display: "grid", gap: "1rem" }}>
    {gefilterteKunden.length > 0 ? (
      gefilterteKunden.map((kunde) => (
        <div
          key={kunde.id}
          style={{
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>{kunde.name}</h3>
          <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>Kennzeichen: {kunde.kennzeichen}</p>
          <p style={{ margin: 0, color: "#4b5563" }}>Fahrzeug: {kunde.modell}</p>
        </div>
      ))
    ) : (
      <p style={{ color: "#6b7280" }}>Keine Kunden gefunden.</p>
    )}
  </div>
</div>

); }


    