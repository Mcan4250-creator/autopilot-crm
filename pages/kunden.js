import React, { useEffect, useState } from "react";

const Kunden = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    license: "",
    car: "",
    image: null,
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(stored);
    setFilteredCustomers(stored);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.license.toLowerCase().includes(term) ||
        c.car.toLowerCase().includes(term)
    );
    setFilteredCustomers(filtered);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewCustomer((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.license || !newCustomer.car) {
      alert("Bitte alle Felder ausfüllen.");
      return;
    }

    const updated = [...customers, newCustomer];
    setCustomers(updated);
    setFilteredCustomers(updated);
    localStorage.setItem("customers", JSON.stringify(updated));

    setNewCustomer({ name: "", license: "", car: "", image: null });
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Möchtest du diesen Kunden wirklich löschen?");
    if (confirmed) {
      const updated = [...filteredCustomers];
      updated.splice(index, 1);
      setFilteredCustomers(updated);
      setCustomers(updated);
      localStorage.setItem("customers", JSON.stringify(updated));
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Kundenübersicht</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="🔍 Suchen…"
        style={{
          padding: "0.5rem",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

     <div
  style={{
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "2rem",
    maxWidth: "500px",
  }}
>
  <h3 style={{ marginBottom: "1rem" }}>Neuen Kunden hinzufügen</h3>

  <input
    placeholder="Name"
    value={newCustomer.name}
    onChange={(e) =>
      setNewCustomer((prev) => ({ ...prev, name: e.target.value }))
    }
    style={{
      marginBottom: "0.5rem",
      width: "100%",
      padding: "0.6rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
    }}
  />
  <input
    placeholder="Kennzeichen"
    value={newCustomer.license}
    onChange={(e) =>
      setNewCustomer((prev) => ({ ...prev, license: e.target.value }))
    }
    style={{
      marginBottom: "0.5rem",
      width: "100%",
      padding: "0.6rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
    }}
  />
  <input
    placeholder="Fahrzeug"
    value={newCustomer.car}
    onChange={(e) =>
      setNewCustomer((prev) => ({ ...prev, car: e.target.value }))
    }
    style={{
      marginBottom: "0.5rem",
      width: "100%",
      padding: "0.6rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
    }}
  />

  <label
    style={{
      display: "block",
      marginTop: "0.8rem",
      marginBottom: "0.4rem",
      fontSize: "0.95rem",
      color: "#333",
    }}
  >
    📎 Fahrzeugschein hochladen (optional)
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    style={{
      marginBottom: "1rem",
    }}
  />

  <button
    onClick={handleAddCustomer}
    style={{
      padding: "0.6rem 1rem",
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
    }}
  >
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

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button
              onClick={() => alert("Bearbeiten folgt bald")}
              style={{
                backgroundColor: "#fbbf24",
                color: "#000",
                padding: "0.3rem 0.7rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              ✏️ Bearbeiten
            </button>

            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: "#ef4444",
                color: "#fff",
                padding: "0.3rem 0.7rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              🗑 Löschen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kunden;

