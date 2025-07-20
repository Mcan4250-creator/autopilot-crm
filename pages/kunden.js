
import { useState } from "react";

export default function Kunden() { const [customers, setCustomers] = useState([]); const [search, setSearch] = useState(""); const [name, setName] = useState(""); const [license, setLicense] = useState(""); const [car, setCar] = useState(""); const [image, setImage] = useState(null);

const handleAddCustomer = () => { if (!name || !license || !car) return; const newCustomer = { name, license, car, image: image ? URL.createObjectURL(image) : null }; setCustomers([...customers, newCustomer]); setName(""); setLicense(""); setCar(""); setImage(null); };

const handleFileChange = (e) => { setImage(e.target.files[0]); };

const handleDeleteCustomer = (index) => { const updated = [...customers]; updated.splice(index, 1); setCustomers(updated); };

const filteredCustomers = customers.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.license.toLowerCase().includes(search.toLowerCase()) || c.car.toLowerCase().includes(search.toLowerCase()) );

return ( <div style={{ padding: "2rem" }}> <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Kundenübersicht</h1>

<input
    type="text"
    placeholder="🔍 Suchen..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={inputStyle}
  />

  <div style={formContainer}>
    <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>Neuen Kunden hinzufügen</h2>

    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Kennzeichen"
      value={license}
      onChange={(e) => setLicense(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Fahrzeug"
      value={car}
      onChange={(e) => setCar(e.target.value)}
      style={inputStyle}
    />

    <label style={{ fontWeight: "500", marginBottom: "0.5rem" }}>📎 Fahrzeugschein (optional)</label>
    <input type="file" onChange={handleFileChange} style={inputStyle} />

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
        marginTop: "1rem",
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

const inputStyle = { display: "block", width: "100%", padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "6px", };

const buttonStyle = { backgroundColor: "#2563eb", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "6px", fontSize: "1rem", cursor: "pointer", };

const formContainer = { backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px", marginTop: "2rem", };

