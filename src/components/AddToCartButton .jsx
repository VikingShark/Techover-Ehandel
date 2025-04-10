import React from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = ({onClick}) => {
  return (
    <Button variant="contained"               sx={{
      width: { xs: "100%", md: 300 },
      height: { xs: 55, md: 60 },
      bgcolor: "hsl(26, 100%, 55%)",
      color: "black",
      fontWeight: 800,
      borderRadius: 3,
      "&:hover": { bgcolor: "hsl(26, 95.00%, 65%)" },
    }}
      onClick={onClick}
      >
      
      <AddShoppingCartIcon sx={{ mr: 2 }} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
