import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const MobileSideMenu = ({ openMenu, setOpenMenu, navLinks }) => {

    const handleCloseMeny = () => {
        setOpenMenu(false)
    };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000040",
        zIndex: 9999,
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
          zIndex: 9998,
          transition: "left 0.3s ease",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: 'left',
            gap: 2,
            width: "25%",
            paddingTop: 10,
            paddingLeft: 2
          }}
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
