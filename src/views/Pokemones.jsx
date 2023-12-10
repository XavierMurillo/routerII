import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemonesList, setPokemonesList] = useState([]);
  const [pokemonElegido, setPokemonElegido] = useState("");
  useEffect(() => {
    pokemonList();
  }, []);
  const pokemonList = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008");
      const data = await res.json();
      setPokemonesList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const irAPokemon = () => {
    navigate(`/pokemones/${pokemonElegido}`);
  };
  const verDatos = (e) => {
    e.preventDefault();
    if (pokemonElegido) {
      irAPokemon();
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Selecciona un pokemon
      </h1>
      <form className="pokemonForm">
        <select
          name="pokemones"
          id="pk"
          style={{
            width: "20vw",
            height: "5vh",
            fontSize: "larger",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setPokemonElegido(e.target.value)}
        >
          <option value="0"> pokemones </option>
          {pokemonesList.length > 0 ? (
            pokemonesList.map((pokemon) => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </select>
        <button
          style={{
            width: "8vw",
            color: "white",
            backgroundColor: "black",
            height: "5vh",
            borderRadius: "5px",
            fontSize: "larger",
          }}
          onClick={verDatos}
        >
          Ver detalle
        </button>
      </form>
    </div>
  );
};

export default Pokemones;
