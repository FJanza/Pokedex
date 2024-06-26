import {Card, CardContent, Typography, Box} from "@mui/material";
import React, {useEffect, useState} from "react";
import TypeVisualizer from "./type";
import {Type} from "src/interfaces/pokemon";

interface Props {
  pokemon: any;
}

const objListaTiposWeakness: {[key: string]: string[]} = {
  normal: ["fighting"],
  fire: ["water", "ground", "rock"],
  water: ["grass", "electric"],
  grass: ["fire", "ice", "poison", "flying", "bug"],
  electric: ["ground"],
  ice: ["fire", "fighting", "rock", "steel"],
  fighting: ["flying", "psychic", "fairy"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  flying: ["electric", "ice", "rock"],
  psychic: ["bug", "ghost", "dark"],
  bug: ["flying", "rock", "fire"],
  rock: ["water", "grass", "fighting", "ground", "steel"],
  ghost: ["ghost", "dark"],
  dragon: ["ice", "Dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  steel: ["fire", "fighting", "ground"],
  fairy: ["poison", "steel"],
};

const Details = ({pokemon}: Props) => {
  const [tiposWeakness, setTiposWeakness] = useState<Type[]>();

  useEffect(() => {
    let arrayTiposWeaknessAux = pokemon.types.map((type: any) => {
      return objListaTiposWeakness[type.type.name];
    });

    let tiposWeaknessAux: Type[] = [];

    for (let i = 0; i < arrayTiposWeaknessAux.length; i++) {
      tiposWeaknessAux.push(...arrayTiposWeaknessAux[i]);
    }

    const tiposWeakness = new Set(tiposWeaknessAux);

    setTiposWeakness([...tiposWeakness]);
  }, [pokemon]);

  return (
    <>
      <Card sx={{height: "100%"}}>
        <CardContent>
          <Box sx={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <Typography variant={"h5"}>Details</Typography>
            <Typography sx={{fontSize: "13px"}}>Type</Typography>
            {/* <Type type={pokemon}></Type> */}
            <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
              {pokemon.types.map((type: any) => {
                return (
                  <TypeVisualizer type={type.type.name} key={type.type.name} />
                );
              })}
            </Box>
            <Typography sx={{fontSize: "13px"}}>Weakness</Typography>
            {/* <Type type={pokemon}></Type> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {tiposWeakness?.map((tipo) => {
                return <TypeVisualizer type={tipo} key={tipo + "112"} />;
              })}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
