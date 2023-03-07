import {Card, CardContent, Typography, Box} from "@mui/material";
import React from "react";
import Type from "./type";

interface Props {
  pokemon: any;
}

const Details = ({pokemon}: Props) => {
  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <Typography>Details</Typography>
            <Typography sx={{fontSize: "13px"}}>Type</Typography>
            {/* <Type type={pokemon}></Type> */}
            <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
              {pokemon.types.map((type: any) => {
                return <Type type={type.type.name}></Type>;
              })}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
