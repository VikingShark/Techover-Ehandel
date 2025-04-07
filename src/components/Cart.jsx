import { Box, Button, Divider, Typography } from "@mui/material";
import temporaryImg from "../assets/image-product-1.jpg";

const Cart = ({ openCart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "350px",
        alignItems: "center",
        height: "225px",
        backgroundColor: "#ffffff",
        color: "#000000",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: openCart ? 100 : "-100vh",
        right: { xl: openCart ? 300 : "-20vw", md: openCart ? 50 : "-20vw", xs: openCart ? 50 : "-20vw" },
        transition: "0.4s right ease",
        textAlign: "left",
        borderRadius: "7px",
        zIndex: 9999 
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
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'space-between'
        }}
      >
        {/* Hantera conditional rendering när vi har context för innehållet av cart, om den är tom eller har innehåll */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            component="img"
            src={temporaryImg}
            alt={null}
            sx={{
              width: "50px",
              height: "auto",
              borderRadius: "3px",
              objectFit: "contain",
            }}
          ></Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Här ska det vara dynamiskt</Typography>
            <Typography>Här också, bilden också</Typography>
          </Box>
        </Box>
        <Button
              variant="contained"
              sx={{
                width: '100%',
                height: '50px',
                bgcolor: "hsl(26, 100%, 55%)",
                color: "black",
                fontWeight: 800,
                borderRadius: 3,
                textTransform: 'none',
                "&:hover": {bgcolor: "hsl(26, 95.00%, 65%)"}
              }}
            >
              Checkout
            </Button>
      </Box>
    </Box>
  );
};

export default Cart;
