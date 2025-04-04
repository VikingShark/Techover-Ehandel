import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const QuantitySelector = ({ quantity, handleIncrease, handleDecrease }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleDecrease}><Remove /></IconButton>
      <Typography variant="h6">{quantity}</Typography>
      <IconButton onClick={handleIncrease}><Add /></IconButton>
    </Box>
  );
};

export default QuantitySelector;
