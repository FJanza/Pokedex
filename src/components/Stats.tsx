import {Box, Card, Typography} from "@mui/material";
import React from "react";
import {Barra} from "./Barra";

interface Props {
  pokemon: any;
}

const Stats = ({pokemon}: Props) => {
  return (
    <Box
      component={Card}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography variant={"h5"}>Stats</Typography>
      {pokemon.stats.map((stat: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography sx={{flex: 1}}>{stat.stat.name}</Typography>
            <Box
              sx={{
                flex: 4,
                width: "100%",
              }}
            >
              <Barra valor={(stat.base_stat / 255) * 100} />
            </Box>
            <Typography sx={{flex: 0.2}}>{stat.base_stat}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Stats;
