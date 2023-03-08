import React from "react";
import {Card, CardContent, Typography, Box, IconButton} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface Props {
  pokemonID: any;
  pokemon: any;
  handlerButtonFlechaIzq: any;
  handlerButtonFlechaDer: any;
}

const VisualizadorDePokemon = ({
  pokemonID,
  pokemon,
  handlerButtonFlechaIzq,
  handlerButtonFlechaDer,
}: Props) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pokemon.sprites.front_default ? (
          <img
            onLoad={() => {}}
            src={pokemon.sprites.front_default}
            style={{flex: 1, maxHeight: "200px", maxWidth: "200px"}}
          />
        ) : (
          <img
            onLoad={() => {}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
            style={{
              flex: 1,
              maxHeight: "200px",
              maxWidth: "200px",
              opacity: 0.4,
            }}
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

        <Typography gutterBottom variant="h6" component="div">
          #{pokemonID}
        </Typography>

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
