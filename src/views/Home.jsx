import React, { useEffect, useState } from "react";

export const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        Bienvenido Maestro Pokemon
      </h1>
      <img
        src="src/assets/img/pikachu.png"
        style={{ width: "50vh", display: "flex" }}
      />
    </div>
  );
};
