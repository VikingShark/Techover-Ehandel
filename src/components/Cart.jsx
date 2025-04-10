import { Box, Button, Divider, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartState";

const Cart = ({ openCart }) => {
  const { cartItems, setCartItems, cartIsEmpty, setCartIsEmpty } = useContext(CartContext);
  
  const handleDeleteCartItem = (id) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
    if (cartItems.length === 1) {
      setCartIsEmpty(true);
    }
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartIsEmpty(false);
    } else {
      setCartIsEmpty(true);
    }
  }, [cartItems]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.product.price * item.product.discount * item.quantity);
  }, 0).toFixed(2);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "350px",
        maxWidth: "90vw",
        alignItems: "center",
        height: "auto",
        minHeight: "225px",
        paddingBottom: 2,
        backgroundColor: "#ffffff",
        color: "#000000",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: openCart ? 100 : "-100vh",
        right: {
          xl: openCart ? 300 : "-20vw",
          md: openCart ? 50 : "-20vw",
          xs: openCart ? 20 : "-20vw",
        },
        transition: "0.4s right ease",
        textAlign: "left",
        borderRadius: "7px",
        zIndex: 9999,
      }}
    >
      <Typography
        sx={{
          paddingLeft: 2,
          paddingTop: 2,
          fontWeight: 700,
          alignSelf: "flex-start",
        }}
      >
        Cart
      </Typography>
      <Divider
        sx={{ backgroundColor: "#ffffff", height: "1px", width: "100%" }}
      />
      <Box
        sx={{
          height: "55%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {cartIsEmpty ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
              justifyContent: "center",
              height: "65px"
            }}
          >
            <Typography sx={{ fontWeight: 700, textAlign: "center" }}>
              Your cart is empty.
            </Typography>
          </Box>
        ) : (
          cartItems.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", gap: 2, alignItems: "center", marginBottom: 2 }}
            >
              <Box
                component="img"
                src={item.product.image[0]}
                alt="Prod Img"
                sx={{
                  width: "50px",
                  height: "auto",
                  borderRadius: "3px",
                  objectFit: "contain",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>{item.product.title}</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography>
                    {"$" + (item.product.price * item.product.discount).toFixed(2) + " x " + item.quantity}
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {"$" + (item.product.price * item.product.discount * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <DeleteForeverIcon
                sx={{ "&:hover": { cursor: "pointer" } }}
                onClick={() => handleDeleteCartItem(item.product.id)}
              />
            </Box>
          ))
        )}
        <Typography sx={{ display: cartIsEmpty ? 'none' : 'flex', alignSelf: 'flex-start', paddingRight: 1, paddingBottom: 1, fontWeight: 700}}>Total Price: ${totalPrice}</Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "50px",
            bgcolor: "hsl(26, 100%, 55%)",
            color: "black",
            fontWeight: 800,
            borderRadius: 3,
            textTransform: "none",
            "&:hover": { bgcolor: "hsl(26, 95.00%, 65%)" },
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
