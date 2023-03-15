import React from "react";
import {useEffect, useState} from "react";
import {Box, Button, Card, Typography} from "@mui/material";
import {Chain, ValueClass} from "src/interfaces/pokemon";
import style from "../styles/Home.module.css";
import Image from "next/image";

interface Props {
  pokemon: any;
  numeroPokemon: (numero: number) => void;
}

const EvolutionChain = ({pokemon, numeroPokemon}: Props) => {
  const [dataSpecie, setDataSpecie] = useState<ValueClass>();
  const [evolutionChain, setEvolutionChain] = useState<Chain>();

  useEffect(() => {
    fetch(`${pokemon.species.url}`)
      .then((res) => res.json())
      .then((data) => {
        // Si todo esta bien, actualizamos el pokemon
        // Y le indicamos que no hay error
        setDataSpecie(data);
        // setLoading(false);
        // setError(false);
      });
    // .catch((err) => {
    //   setLoading(false);
    //   setError(true);
    // });
  }, [pokemon]);

  useEffect(() => {
    fetch(`${dataSpecie?.evolution_chain.url}`)
      .then((res) => res.json())
      .then((data) => {
        // Si todo esta bien, actualizamos el pokemon
        // Y le indicamos que no hay error
        setEvolutionChain(data.chain);
        // setLoading(false);
        // setError(false);
      });
    // .catch((err) => {
    //   setLoading(false);
    //   setError(true);
    // });
  }, [dataSpecie]);

  return (
    <Box component={Card} sx={{height: "100%"}}>
      <Typography variant={"h5"} sx={{paddingLeft: "1rem", paddingTop: "1rem"}}>
        Evolution Chain
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            alt={"pokemon-img"}
            height={96}
            width={96}
            src={
              evolutionChain?.species.url.split("/")[6] === "1010" ||
              evolutionChain?.species.url.split("/")[6] === "1009"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    evolutionChain?.species.url.split("/")[6]
                  }.png`
            }
            className={style.img}
            onClick={() => {
              evolutionChain?.species.url.split("/")[6] &&
                numeroPokemon(+evolutionChain?.species.url.split("/")[6]);
            }}
          />
          <Typography variant={"subtitle1"} sx={{mt: "0.5rem"}}>
            {evolutionChain?.species.name}
          </Typography>
        </Box>

        {evolutionChain?.evolves_to &&
          evolutionChain?.evolves_to.map((evolucion, i) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  alt="pokemon-img"
                  height={96}
                  width={96}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    evolucion.species.url.split("/")[6]
                  }.png`}
                  className={style.img}
                  onClick={() => {
                    numeroPokemon(+evolucion.species.url.split("/")[6]);
                  }}
                />
                <Typography variant={"subtitle1"} sx={{mt: "0.5rem"}}>
                  {evolucion.species.name}
                </Typography>
              </Box>
            );
          })}

        {evolutionChain?.evolves_to[0]?.evolves_to &&
          evolutionChain?.evolves_to[0]?.evolves_to.map((evolucion, i) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  height={96}
                  width={96}
                  alt="pokemon-img"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    evolucion.species.url.split("/")[6]
                  }.png`}
                  className={style.img}
                  onClick={() => {
                    numeroPokemon(+evolucion.species.url.split("/")[6]);
                  }}
                />
                <Typography variant={"subtitle1"} sx={{mt: "0.5rem"}}>
                  {evolucion.species.name}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default EvolutionChain;
