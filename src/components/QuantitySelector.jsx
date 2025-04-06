import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const QuantitySelector = ({ quantity, handleIncrease, handleDecrease }) => {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", md: "center" },
        width: { xs: "100%", md: "auto" },
        mb: { xs: 1, md: 0 },
      }}
    >
      <IconButton
        size="small"
        sx={{
          color: "hsl(26, 100%, 55%)",
          "&:focus": { outline: "none" },
          "&:hover": { color: "hsl(26, 95.00%, 65%)" },
          fontSize: "2rem",
        }}
        onClick={handleDecrease}
      >
        <Remove />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          mx: 4,
          color: "black",
          fontSize: { xs: 18, md: 28 },
          fontWeight: "bold",
        }}
      >
        {quantity}
      </Typography>
      <IconButton
        size="large"
        sx={{
          fontSize: "2rem",
          color: "hsl(26, 100%, 55%)",
          "&:focus": { outline: "none" },
          "&:hover": { color: "hsl(26, 95.00%, 65%)" },
        }}
        onClick={handleIncrease}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
