import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  type: string;
}

const Type = ({type}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid #a5a5a5 2px",
        borderRadius: "5px",
        padding: "3px",
      }}
    >
      <Typography sx={{fontSize: "13px"}}>{type}</Typography>
    </Box>
  );
};

export default Type;
