import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "src/styles/Home.module.css";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Details from "src/components/Details";
import Stats from "src/components/Stats";
import EvolutionChain from "src/components/EvolutionChain";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import VisualizadorDePokemon from "src/components/VisualizadorDePokemon";

//max pokemon 1010

export default function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonID, setPokemonID] = useState(1);

  function handlerButtonFlechaDer() {
    if (pokemonID + 1 <= 1010) {
      setPokemonID(pokemonID + 1);
    } else {
      setPokemonID(1);
    }
  }

  function handlerButtonFlechaIzq() {
    if (pokemonID - 1 >= 1) {
      setPokemonID(pokemonID - 1);
    } else {
      setPokemonID(1010);
    }
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then((res) => res.json())
      .then((data) => {
        // Si todo esta bien, actualizamos el pokemon
        // Y le indicamos que no hay error
        setPokemon(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID]);

  return (
    <>
      {pokemon ? (
        <Box
          sx={{
            padding: "10rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Box sx={{display: "flex", flexDirection: "row", gap: "2rem"}}>
            <Box
              sx={{width: "250px", height: "300px", backgroundColor: "green"}}
            >
              <VisualizadorDePokemon
                pokemonID={pokemonID}
                pokemon={pokemon}
                handlerButtonFlechaIzq={() => handlerButtonFlechaIzq()}
                handlerButtonFlechaDer={() => handlerButtonFlechaDer()}
              />
            </Box>
            <Box sx={{flex: 1}}>
              <Stats />
            </Box>
          </Box>
          <Box sx={{display: "flex", flexDirection: "row", gap: "2rem"}}>
            <Box sx={{flex: 3}}>
              <Details pokemon={pokemon} />
            </Box>
            <Box sx={{flex: 2}}>
              <EvolutionChain />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
