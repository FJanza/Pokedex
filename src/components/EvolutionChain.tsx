import React from "react";
import {useEffect, useState} from "react";
import {Box, Card, Typography} from "@mui/material";
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png

interface Props {
  pokemon: any;
  pokemonID: number;
}

const EvolutionChain = ({pokemon, pokemonID}: Props) => {
  const [chain, setChain] = useState<null | {
    evolves_to: {species: {name: string}};
  }>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonID}/`)
      .then((res) => res.json())
      .then((data) => {
        // Si todo esta bien, actualizamos el pokemon
        // Y le indicamos que no hay error
        setChain(data);
        // setLoading(false);
        // setError(false);
      });
    // .catch((err) => {
    //   setLoading(false);
    //   setError(true);
    // });
  }, [pokemonID]);

  return (
    <Box component={Card}>
      <Box sx={{display: "flex", flexDirection: "row", padding: "1rem"}}>
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <img src={pokemon.sprites.front_default} />
          <Typography variant="h5">{pokemon.name}</Typography>
        </Box>

        {chain && chain.evolves_to ? (
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chain.evolves_to.species.name}.png`}
            />
            <Typography sx={{fontSize: "15px"}}>
              {chain.evolves_to.species.name}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default EvolutionChain;
