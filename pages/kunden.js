import React, { useState } from "react";

export default function Kunden() { const [customers, setCustomers] = useState([]); const [searchTerm, setSearchTerm] = useState(""); const [name, setName] = useState(""); const [license, setLicense] = useState(""); const [car, setCar] = useState(""); const [image, setImage] = useState(null);

const handleAddCustomer = () => { if (!name || !license || !car) return;

const newCustomer = {
  name,
  license,
  car,
  image: image ? URL.createObjectURL(image) : null,
};

setCustomers([...customers, newCustomer]);
setName("");
setLicense("");
setCar("");
setImage(null);

};

const handleDeleteCustomer = (index) => { const updated = [...customers]; updated.splice(index, 1); setCustomers(updated); };

const filteredCustomers = customers.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()) );

const inputStyle = { display: "block", width: "100%", padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "6px", };

const labelStyle = { fontSize: "0.9rem", marginBottom: "0.25rem", display: "block", fontWeight: "bold", };

const buttonStyle = { backgroundColor: "#2563eb", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "6px", fontSize: "1rem", cursor: "pointer", };

return ( <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}> <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Kundenübersicht</h1>

<input
    type="text"
    placeholder="🔍 Suchen..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={inputStyle}
  />

  <div style={{ backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px", marginBottom: "2rem" }}>
    <h2 style={{ marginBottom: "1rem" }}>Neuen Kunden hinzufügen</h2>

    <label style={labelStyle}>🧍 Name</label>
    <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />

    <label style={labelStyle}>🚗 Kennzeichen</label>
    <input style={inputStyle} value={license} onChange={(e) => setLicense(e.target.value)} />

    <label style={labelStyle}>🚙 Fahrzeug</label>
    <input style={inputStyle} value={car} onChange={(e) => setCar(e.target.value)} />

    <label style={labelStyle}>📎 Fahrzeugschein (optional)</label>
    <input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
      style={{ marginBottom: "1rem" }}
    />

    <button onClick={handleAddCustomer} style={buttonStyle}>+ Hinzufügen</button>
  </div>

  {filteredCustomers.map((c, index) => (
    <div
      key={index}
      style={{
        background: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        marginBottom: "1rem",
      }}
    >
      <strong style={{ fontSize: "1.2rem" }}>{c.name}</strong>
      <p>Kennzeichen: {c.license}</p>
      <p>Fahrzeug: {c.car}</p>
      {c.image && (
        <img
          src={c.image}
          alt="Fahrzeugschein"
          style={{
            maxWidth: "300px",
            marginTop: "0.5rem",
            borderRadius: "6px",
          }}
        />
      )}
      <button
        onClick={() => handleDeleteCustomer(index)}
        style={{
          marginTop: "1rem",
          backgroundColor: "#f56565",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ❌ Löschen
      </button>
    </div>
  ))}
</div>

); }

