import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul
        style={{
          display: "flex",
          width: "200px",
          margin: "0 auto",
          gap: "20px",
          justifyContent: "space-between",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
