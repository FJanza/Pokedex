import React, {useEffect, useState} from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import style from "../styles/Home.module.css";
import Image from "next/image";
interface Props {
  pokemonID: any;
  pokemon: any;
  handlerButtonFlechaIzq: any;
  handlerButtonFlechaDer: any;
  cambioPokemonById: (pomekemonid: string) => void;
  error: (error: boolean) => void;
}

const VisualizadorDePokemon = ({
  pokemonID,
  pokemon,
  handlerButtonFlechaIzq,
  handlerButtonFlechaDer,
  cambioPokemonById,
  error,
}: Props) => {
  const regexPokemonID = new RegExp("^[1-9][0-9]{0,3}$");

  const [pokemonIDAux, setPokemonIDAux] = useState(pokemonID);

  useEffect(() => {
    if (parseInt(pokemonIDAux) < 1011 && parseInt(pokemonIDAux) > 0) {
      cambioPokemonById(pokemonIDAux);
    }
    if (parseInt(pokemonIDAux) > 1010) {
      error(true);
    }
  }, [pokemonIDAux]);

  useEffect(() => {
    setPokemonIDAux(pokemonID);
  }, [pokemonID]);

  return (
    <Box
      component={Card}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "space-between",
        height: "100%",
      }}
    >
      <Typography variant={"h5"} sx={{paddingLeft: "2rem", paddingTop: "2rem"}}>
        Pokemon
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pokemon.sprites.front_default ? (
          <Image
            alt="pokemon-img"
            height={200}
            width={200}
            onLoad={() => {}}
            src={pokemon.sprites.front_default}
            style={{flex: 1}}
            className={style.imgVisualizador}
          />
        ) : (
          <Image
            alt="pokemon-img"
            height={200}
            width={200}
            onLoad={() => {}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
            style={{
              flex: 1,
              maxHeight: "200px",
              maxWidth: "200px",
              opacity: 0.4,
            }}
            className={style.imgVisualizador}
          />
        )}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <IconButton
          size="large"
          onClick={() => {
            handlerButtonFlechaIzq();
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        <TextField
          variant="standard"
          value={pokemonIDAux}
          onChange={(e) => {
            if (e.target.value === "") {
              setPokemonIDAux(e.target.value);
            } else if (regexPokemonID.test(e.target.value)) {
              setPokemonIDAux(e.target.value);
            }
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
            disableUnderline: true,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: `${pokemonIDAux.toString().length + 7}ch`,
            px: 2,
          }}
        />

        <IconButton
          size="large"
          onClick={() => {
            handlerButtonFlechaDer();
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VisualizadorDePokemon;
