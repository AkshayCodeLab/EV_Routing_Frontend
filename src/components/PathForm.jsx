import React from "react";

const PathForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <form action="submit">
      <label>From: </label>
      <input placeholder="from" name="from" onChange={handleInputChange} />

      <label>To: </label>
      <input placeholder="to" name="to" onChange={handleInputChange} />

      <label>Fuel: </label>
      <input placeholder="fuel" name="fuel" onChange={handleInputChange} />

      <div style={{ marginTop: "10px" }}>
        <label>Pairwise Comparison Matrix:</label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 50px)",
            gap: "5px",
            marginTop: "5px",
          }}
        >
          {[...Array(4)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <input
                key={`${row}-${col}`}
                name={`matrix[${row}][${col}]`}
                onChange={handleInputChange}
                style={{ width: "50px", textAlign: "center" }}
              />
            ))
          )}
        </div>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default PathForm;
