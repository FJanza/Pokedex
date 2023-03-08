import {Box} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// FN 0-0.07
// mw 0.07 - 0.15
// ft 0.15 -0.38
// ww 0.38 -0.45
// bs 0.45 - 1

//mitad de la flecha

interface Props {
  valor: number;
}

export const Barra = ({valor}: Props) => {
  return (
    <>
      <Box sx={{display: "flex", height: "0.5rem"}}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "red",
            borderStartRadius: "1rem",
            borderEndRadius: "1rem",
          }}
        ></Box>
      </Box>
    </>
  );
};
