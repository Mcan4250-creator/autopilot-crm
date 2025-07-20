import { useState } from "react";

export default function Kunden() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const [car, setCar] = useState("");
  const [image, setImage] = useState(null);

  const handleAddCustomer = () => {
    if (!name || !license || !car) return;
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

  const handleDeleteCustomer = (index) => {
    const updated = [...customers];
    updated.splice(index, 1);
    setCustomers(updated);
  };

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Kundenübersicht</h1>
      <input
        type="text"
        placeholder="🔍 Suchen…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.formCard}>
        <h2 style={styles.subheading}>Neuen Kunden hinzufügen</h2>
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
        <label style={styles.label}>📎 Fahrzeugschein hochladen:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />
        <button onClick={handleAddCustomer} style={styles.button}>
          + Hinzufügen
        </button>
      </div>

      <div>
        {filteredCustomers.map((c, index) => (
          <div key={index} style={styles.card}>
            <strong style={{ fontSize: "1.2rem" }}>{c.name}</strong>
            <p>Kennzeichen: {c.license}</p>
            <p>Fahrzeug: {c.car}</p>
            {c.image && (
              <img
                src={c.image}
                alt="Fahrzeugbild"
                style={styles.image}
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
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  searchInput: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "2rem",
  },
  formCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginBottom: "2rem",
    maxWidth: "600px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  label: {
    marginBottom: "0.5rem",
    display: "block",
    fontWeight: "500",
    marginTop: "0.5rem",
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
  card: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "300px",
    marginTop: "0.5rem",
    borderRadius: "6px",
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
};
