import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const RootLayout = ({ NavBar }) => {
  return (
    <Box>
      <NavBar />
      <main>
        <Box sx={{ mt: { xs: 0, md: 12 } }}>
          <Outlet />
        </Box>
      </main>
    </Box>
  );
};

export default RootLayout;
