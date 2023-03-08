import React from "react";
import {useEffect, useState} from "react";
import {Box, Button, Card, Typography} from "@mui/material";

interface Props {
  pokemon: any;
}

const EvolutionChain = ({pokemon}: Props) => {
  const [chainId, setChainId] = useState(1);
  const [chain, setChain] = useState<null | {
    evolves_to: [
      {
        evolves_to: [{species: {name: string; url: string}}];
        species: {name: string; url: string};
      }
    ];
    species: {name: string; url: string};
  }>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${chainId}/`)
      .then((res) => res.json())
      .then((data) => {
        // Si todo esta bien, actualizamos el pokemon
        // Y le indicamos que no hay error
        setChain(data.chain);
        // setLoading(false);
        // setError(false);
      });
    // .catch((err) => {
    //   setLoading(false);
    //   setError(true);
    // });
  }, [chainId]);

  useEffect(() => {
    if (
      !(
        chain?.species.name.includes(pokemon.name) ||
        (chain?.evolves_to[0] &&
          chain?.evolves_to[0].species.name.includes(pokemon.name)) ||
        (chain?.evolves_to[0].evolves_to[0] &&
          chain?.evolves_to[0].evolves_to[0].species.name.includes(
            pokemon.name
          ))
      )
    ) {
      setChainId(chainId + 1);
    }
  }, [pokemon]);

  return (
    <Box component={Card}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "1rem",
          justifyContent: "space-evenly",
          alignContent: "center",
        }}
      >
        {chain && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                chain.species.url.split("/")[6]
              }.png`}
            />
            <Typography variant="h5">{chain.species.name}</Typography>
          </Box>
        )}
        {chain?.evolves_to[0] && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                chain.evolves_to[0].species.url.split("/")[6]
              }.png`}
            />
            <Typography variant="h5">
              {chain.evolves_to[0].species.name}
            </Typography>
          </Box>
        )}
        {chain?.evolves_to[0] && chain?.evolves_to[0].evolves_to[0] && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                chain.evolves_to[0].evolves_to[0].species.url.split("/")[6]
              }.png`}
            />
            <Typography variant="h5">
              {chain.evolves_to[0].evolves_to[0].species.name}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EvolutionChain;
