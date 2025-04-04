import React from "react";
import { Typography, Box } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box>
      <Typography variant="h2">Sneaker Company</Typography>
      <Typography variant="h1">Fall Limited Edition Sneakers</Typography>
      <Typography variant="body1">These low-profile sneakers are your perfect casual wear companion...</Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4">$125.00</Typography>
        <Box sx={{ bgcolor: "black", color: "white", p: 1, ml: 2 }}>50%</Box>
      </Box>
      <Typography sx={{ textDecoration: "line-through" }}>$250.00</Typography>
    </Box>
  );
};

export default ProductDetails;
