import { Box, Button, Divider, Toolbar, Typography, Avatar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import {ShoppingCartOutlined} from '@mui/icons-material';
import './NavBar.css';



const NavBar = () => {
    return (
        <Box 
        sx={{
            width: "100%",
            height: 100,
            backgroundColor: '#ffffff',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", 
          }}
        >
            <Box sx={{maxWidth: 1200, width: '100%', height: '100%', display: 'flex', alignItems: 'center'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 9, width: '55%', height: '100%', position: 'relative'}}>
                    <Typography sx={{color: '#000000'}} variant="h4">
                        sneakers
                    </Typography>
                    <Box sx={{display: 'flex', gap: 4, maxHeight: '60%', height: '100%', alignItems: 'flex-stretch', marginTop: 'auto' }}>
                        <NavLink className="navlink" to="/">Collections</NavLink>
                        <NavLink className="navlink" to="/men">Men</NavLink>
                        <NavLink className="navlink" to="/women">Women</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, width: '45%', justifyContent: 'flex-end'}}>
                    <Button onClick={null} sx={{display: 'flex', alignItems: 'center'}}>
                        <ShoppingCartOutlined sx={{color: '#000000', fontSize: 26}} />
                    </Button>
                    <Avatar sx={{'&:hover': {cursor: 'pointer', border: '2px solid #ff7d1a'}}} alt="Marcus Pousette" src="../design/marcus-pousette.jpg" />
                </Box>
                
            </Box>
            <Divider sx={{backgroundColor: '#ffffff', height: '1px', width: '100%', }} />
        </Box>
    );
};

export default NavBar;