import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import {Type} from "src/interfaces/pokemon";

const pokemonColorsType = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#705746",
  flying: "#B9D9D9",
  psychic: "#F955F7",
  bug: "#A6B91A",
  rock: "#A7A7AE",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#383838",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
interface Props {
  type: Type;
}

const TypeVisualizer = ({type}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `solid ${pokemonColorsType[type]} 2px`,
        borderRadius: "5px",
        padding: "3px",
      }}
    >
      <Typography sx={{fontSize: "13px", fontWeight: 600}}>{type}</Typography>
    </Box>
  );
};

export default TypeVisualizer;
