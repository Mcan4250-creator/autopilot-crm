import { useState } from "react";

export default function Kunden() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const [car, setCar] = useState("");
  const [image, setImage] = useState(null);
  const [search, setSearch] = useState("");

  const handleAddCustomer = () => {
    if (!name || !license || !car) return;

    const newCustomer = {
      name,
      license,
      car,
      image: image ? URL.createObjectURL(image) : null,
    };
    setCustomers([newCustomer, ...customers]);
    setName("");
    setLicense("");
    setCar("");
    setImage(null);
  };

  const handleDeleteCustomer = (index) => {
    const updated = [...customers];
    updated.splice(index, 1);
    setCustomers(updated);
  };

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Kundenübersicht
      </h1>

      <input
        type="text"
        placeholder="🔍 Suchen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Neuen Kunden hinzufügen</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Kennzeichen"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Fahrzeug"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          style={styles.input}
        />
        <label style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          📎 Fahrzeugschein hochladen:
        </label>
        <input
       <label style={{ fontWeight: "500", marginBottom: "0.5rem", display: "block" }}>
  📎 Fahrzeugschein hochladen:
</label>
<input
  type="file"
  onChange={(e) => setImage(e.target.files[0])}
  style={styles.input}
/>
        />
        <button onClick={handleAddCustomer} style={styles.button}>
          + Hinzufügen
        </button>
      </div>

      {filteredCustomers.map((c, index) => (
        <div key={index} style={styles.customerCard}>
          <strong style={{ fontSize: "1.2rem" }}>{c.name}</strong>
          <p>Kennzeichen: {c.license}</p>
          <p>Fahrzeug: {c.car}</p>
          {c.image && (
            <img
              src={c.image}
              alt="Fahrzeugschein"
              style={{ maxWidth: "300px", borderRadius: "6px", marginTop: "0.5rem" }}
            />
          )}
          <button
            onClick={() => handleDeleteCustomer(index)}
            style={styles.deleteButton}
          >
            ❌ Löschen
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  deleteButton: {
    marginTop: "1rem",
    backgroundColor: "#f56565",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "8px",
    marginTop: "1.5rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  customerCard: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
  },
};

