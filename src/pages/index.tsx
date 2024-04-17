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
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Details from "src/components/Details";
import Stats from "src/components/Stats";
import EvolutionChain from "src/components/EvolutionChain";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import VisualizadorDePokemon from "src/components/VisualizadorDePokemon";
import {Pokemon} from "src/interfaces/pokemonVisualizer";
import {prominent} from "color.js";
import {lightenColor} from "src/helpers/image";
import Swal from "sweetalert2";

//max pokemon 1010

const MAX_POKEMON_ID = 1010;

export default function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonID, setPokemonID] = useState(1);
  const [flecha, setFlecha] = useState("");
  const [backgroundColor, setBackgroundColor] = useState<string>();
  const [errorVisualizador, setErrorVisualizador] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  function handlerButtonFlechaDer() {
    setFlecha("der");
    if (pokemonID + 1 <= 1010) {
      setPokemonID(pokemonID + 1);
    } else {
      setPokemonID(1);
    }
  }

  function handlerButtonFlechaIzq() {
    setFlecha("izq");

    if (pokemonID - 1 >= 1) {
      setPokemonID(pokemonID - 1);
    } else {
      setPokemonID(1010);
    }
  }
  useEffect(() => {
    errorVisualizador &&
      Toast.fire({
        icon: "error",
        title: "El id de pokemon debe ser menor de 1011",
      });
    setErrorVisualizador(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorVisualizador]);

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
  useEffect(() => {
    pokemon?.sprites.front_default &&
      prominent(`${pokemon?.sprites.front_default}`, {format: "hex"}).then(
        (colors: any) => {
          colors[1]
            ? setBackgroundColor(lightenColor(colors[1], 0.1))
            : setBackgroundColor(lightenColor(colors[0], 0.1));
        }
      );
  }, [pokemon]);

  return (
    <>
      {pokemon ? (
        <Box
          sx={{
            padding: "10%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            minWidth: "300px",
            background:
              backgroundColor !== undefined
                ? `linear-gradient(to right top, ${backgroundColor}, ${lightenColor(
                    backgroundColor,
                    0.8
                  )})`
                : "#fafafa",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "2rem",
            }}
          >
            <Box sx={{flex: 1}}>
              <VisualizadorDePokemon
                error={(e) => {
                  setErrorVisualizador(e);
                }}
                cambioPokemonById={(e) => {
                  setPokemonID(parseInt(e));
                }}
                pokemonID={pokemonID}
                pokemon={pokemon}
                handlerButtonFlechaIzq={() => handlerButtonFlechaIzq()}
                handlerButtonFlechaDer={() => handlerButtonFlechaDer()}
              />
            </Box>
            <Box sx={{flex: 4}}>
              <Stats pokemon={pokemon} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "2rem",
            }}
          >
            <Box sx={{flex: 2}}>
              <Details pokemon={pokemon} />
            </Box>
            <Box sx={{flex: 3}}>
              <EvolutionChain
                pokemon={pokemon}
                numeroPokemon={(numeroPokemon) => {
                  setPokemonID(numeroPokemon);
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
