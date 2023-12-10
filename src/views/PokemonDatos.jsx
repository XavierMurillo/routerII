import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDatos = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    sprite: "",
    hp: "",
    attack: "",
    defense: "",
    sa: "",
    sd: "",
    speed: "",
  });
  useEffect(() => {
    getPokemonData();
  }, []);
  const getPokemonData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    setPokemon({
      sprite: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      sa: data.stats[3].base_stat,
      sd: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    });
    console.log(pokemon);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={pokemon.sprite} style={{ height: "50vh" }} />
      <div style={{ marginTop: "1rem" }}>
        <h1>{name}</h1>
        <h1>hp: {pokemon.hp}</h1>
        <h1>attack: {pokemon.attack}</h1>
        <h1>defense: {pokemon.defense}</h1>
        <h1>special-attack: {pokemon.sa}</h1>
        <h1>special-defense: {pokemon.sd}</h1>
        <h1>speed: {pokemon.speed}</h1>
      </div>
    </div>
  );
};

export default PokemonDatos;
