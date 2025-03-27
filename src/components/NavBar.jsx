import { Box, Divider, Typography, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, Menu } from "@mui/icons-material";
import "./NavBar.css";

const NavBar = () => {
  // Todo: Add open and close state to the side menu
  const handleOpenMenu = () => {};

  const handleOpenCart = () => {};

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
    }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
          <Typography sx={{ color: "#000000", fontWeight: "900" }} variant="h4">
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
            {navLinks.map(({to, text}) => (
                <NavLink className="navlink" to={to}>
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
            position: "relative",
          }}
        >
          <Menu
            onClick={handleOpenMenu}
            sx={{
              color: "#68707d",
              fontSize: { xs: 22, md: 26 },
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Typography
            sx={{
              color: "#000000",
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
          <ShoppingCartOutlined
            onClick={handleOpenCart}
            sx={{
              color: "#68707d",
              fontSize: { xs: 22, md: 26 },
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Avatar
            sx={{
              "&:hover": { cursor: "pointer", boxShadow: "0 0 0 2px #ff7d1a" },
              height: { xs: 26, md: 36 },
              width: { xs: 26, md: 36 },
            }}
            alt="Marcus Pousette"
            src="../design/marcus-pousette.jpg"
          />
        </Box>
      </Box>
      <Divider
        sx={{ backgroundColor: "#ffffff", height: "1px", width: "100%" }}
      />
    </Box>
  );
};

export default NavBar;
