

import React, { useEffect, useState } from "react";

const Kunden = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

      <button
        onClick={() => alert("Kundenformular folgt…")}
        style={{
          marginBottom: "1.5rem",
          padding: "0.6rem 1rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        + Kunde hinzufügen
      </button>

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

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button
              onClick={() => alert("Bearbeiten kommt später")}
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