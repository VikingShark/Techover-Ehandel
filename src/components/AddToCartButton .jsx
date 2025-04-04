import React from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = () => {
  return (
    <Button variant="contained" sx={{ bgcolor: "orange", color: "black", fontWeight: 800 }}>
      <AddShoppingCartIcon sx={{ mr: 2 }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
