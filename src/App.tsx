/// <reference types="vite/client" />

import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LOCAL}/pt/showUsers`
      );
      const jsonData = await response.json();
      // display the data in a table
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      style={{
        width: "70vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <section>
        <h2>Users</h2>
        <button onClick={fetchUsers}>Show Users</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </section>
      <section>
        <h2>Add a new user</h2>
        <div>your code to insertUser here *</div>
      </section>
      <section>
        <h2>Delete a user</h2>
        <div>your code to insertUser here *</div>
      </section>
    </div>
  );
}

export default App;
