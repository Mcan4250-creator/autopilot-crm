// pages/kunden.js

import { useState } from "react";

export default function Kunden() {
  const [kunden, setKunden] = useState([
    { id: 1, name: "Max Mustermann", kennzeichen: "K-AA 1234", modell: "BMW 3er" },
    { id: 2, name: "Lisa Meier", kennzeichen: "D-BB 5678", modell: "VW Golf" },
    { id: 3, name: "Ali Yilmaz", kennzeichen: "KÖ-CX 9876", modell: "Mercedes C-Klasse" },
  ]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Kundenübersicht
      </h1>

      <button
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "1.5rem",
        }}
        onClick={() => alert("Hier kommt später das Formular zum Hinzufügen eines Kunden")}
      >
        + Kunde hinzufügen
      </button>

      <div style={{ display: "grid", gap: "1rem" }}>
        {kunden.map((kunde) => (
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
        ))}
      </div>
    </div>
  );
}
