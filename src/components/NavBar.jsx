import { Box, Divider, Typography, Avatar } from "@mui/material";
import { ShoppingCartOutlined, Menu, Close } from "@mui/icons-material";

import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import "./NavBar.css";
import MobileSideMenu from "./MobileSideMenu";
import Cart from "./Cart";
import { CartContext } from "../../context/CartState";

const NavBar = () => {
  const theme = useTheme(); // Access the theme
  const { cartItems, cartIsEmpty } = useContext(CartContext);

  // Handle open/close state of side menu/cart
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleOpenCart = () => {
    setOpenCart((prev) => !prev);
  };

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const navLinks = [
    {
      text: "Collections",
      to: "/",
    },
    {
      text: "Men",
      to: "/men",
    },
    {
      text: "Women",
      to: "/women",
    },
    {
      text: "About",
      to: "/about",
    },
    {
      text: "Contact",
      to: "/contact",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: theme.palette.neutral.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MobileSideMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        navLinks={navLinks}
      />
      <Box
        px={2}
        sx={{
          maxWidth: 1200,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 9,
            width: "55%",
            height: "100%",
            position: "relative",
          }}
        >
          <Typography
            sx={{ color: theme.palette.neutral.veryDarkBlue, fontWeight: "900" }}
            variant="h4"
          >
            sneakers
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              maxHeight: "60%",
              height: "100%",
              alignItems: "flex-stretch",
              marginTop: "auto",
            }}
          >
            {navLinks.map(({ to, text }) => (
              <NavLink key={text} className="navlink" to={to}>
                {text}
              </NavLink>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            gap: 1,
            width: "55%",
            height: "100%",
            position: "relative"
          }}
        >
          {openMenu ? (
            <Close
              onClick={handleOpenMenu}
              sx={{
                color: theme.palette.neutral.darkGrayishBlue,
                fontSize: { xs: 22, md: 26 },
                "&:hover": { cursor: "pointer" },
                zIndex: 9999,
              }}
            />
          ) : (
            <Menu
              onClick={handleOpenMenu}
              sx={{
                color: theme.palette.neutral.darkGrayishBlue,
                fontSize: { xs: 22, md: 26 },
                "&:hover": { cursor: "pointer" },
                zIndex: 9999,
              }}
            />
          )}
          <Typography
            sx={{
              color: theme.palette.neutral.veryDarkBlue,
              fontWeight: "900",
              transform: "translateY(-3px)",
            }}
            variant="h4"
          >
            sneakers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            width: "45%",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{fontSize: 2}}>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <ShoppingCartOutlined
                onClick={handleOpenCart}
                sx={{
                  color: theme.palette.neutral.darkGrayishBlue,
                  fontSize: { xs: 22, md: 26 },
                  "&:hover": { cursor: "pointer", color: theme.palette.neutral.veryDarkBlue },
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: 2,
                  right: 7,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.neutral.white,
                  borderRadius: "10px",
                  width: 18,
                  height: 12,
                  fontSize: 9,
                  display: cartIsEmpty ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "translate(50%, -50%)",
                }}
              >
                {totalQuantity}
              </Typography>
            </Box>
            <Cart openCart={openCart} />
          </Box>
          <Avatar
            sx={{
              "&:hover": {
                cursor: "pointer",
                boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
              },
              height: { xs: 26, md: 36 },
              width: { xs: 26, md: 36 },
            }}
            alt="Marcus Pousette"
            src="../design/marcus-pousette.jpg"
          />
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: theme.palette.neutral.lightGrayishBlue,
          height: "1px",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default NavBar;
