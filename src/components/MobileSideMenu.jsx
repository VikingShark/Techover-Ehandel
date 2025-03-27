import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const MobileSideMenu = ({ openMenu, setOpenMenu, navLinks }) => {

    const handleCloseMeny = () => {
        setOpenMenu(false)
        console.log(openMenu)
    };

    // Förhindra att klick bubblerar upp till det gråa området
    const handleMenuToNotClose = (event) => {
        event.stopPropagation(); 
      };

  return (
    <Box
        onClick={handleCloseMeny}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000090",
        zIndex: 9998,
        position: "fixed",
        top: 0,
        left: openMenu ? 0 : "-100%",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "70%",
          backgroundColor: "#ffffff",
          position: "fixed",
          top: 0,
          left: openMenu ? 0 : "-70%",
          zIndex: 9999,
          transition: "left 0.3s ease",
          display: "flex",
        }}
        onClick={handleMenuToNotClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: 'left',
            gap: 2,
            width: "25%",
            paddingTop: 15,
            paddingLeft: 2
          }}
          onClick={handleMenuToNotClose}
        >
          {navLinks.map(({ to, text }) => (
            <NavLink onClick={handleCloseMeny} key={text} to={to} className="navlink__mobile">
              {text}
            </NavLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileSideMenu;
