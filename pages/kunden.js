import { useState } from "react";

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

const handleImageChange = (e) => { setImage(e.target.files[0]); };

const handleDeleteCustomer = (index) => { const updatedCustomers = [...customers]; updatedCustomers.splice(index, 1); setCustomers(updatedCustomers); };

const filteredCustomers = customers.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()) );

return ( <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}> <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}> Kundenübersicht </h1>

<input
    type="text"
    placeholder="🔍 Suchen..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      padding: "0.75rem 1rem",
      width: "100%",
      maxWidth: "500px",
      marginBottom: "2rem",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
    }}
  />

  <div
    style={{
      backgroundColor: "#f9f9f9",
      padding: "2rem",
      borderRadius: "8px",
      marginBottom: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      maxWidth: "600px",
    }}
  >
    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Neuen Kunden hinzufügen</h2>
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

    <div
      style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}
    >
      <label htmlFor="fileInput" style={{ minWidth: "150px", fontWeight: 500 }}>
        📎 Fahrzeugschein hochladen:
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleImageChange}
        style={{ flex: 1 }}
      />
    </div>

    <button onClick={handleAddCustomer} style={buttonStyle}>
      + Hinzufügen
    </button>
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
          alt="Fahrzeugbild"
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

