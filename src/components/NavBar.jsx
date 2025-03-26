import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import {ShoppingCartOutlined} from '@mui/icons-material';
import './NavBar.css';



const NavBar = () => {
    return (
        <Box 
        sx={{
            border: '1px solid green',
            width: "100%",
            height: 100,
            backgroundColor: '#ffffff',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", 
            padding: "80px 24px"
          }}
        >
            <Box sx={{maxWidth: 1200, width: '100%', border: '1px solid red', display: 'flex', alignItems: 'center', padding: '45px 0px'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 9, width: '55%', height: '100%'}}>
                    <Typography sx={{color: '#000000'}} variant="h4">
                        sneakers
                    </Typography>
                    <Box sx={{display: 'flex', gap: 4, border: '1px solid purple', flexGrow: 1, height: '100%', alignItems: 'center' }}>
                        <NavLink className="navlink" to="/">Collections</NavLink>
                        <NavLink className="navlink" to="/men">Men</NavLink>
                        <NavLink className="navlink" to="/women">Women</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 4, width: '45%', justifyContent: 'flex-end'}}>
                    <Link style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                        <ShoppingCartOutlined sx={{color: '#000000', fontSize: 26}} />
                    </Link>
                    <Link style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{color: '#000000'}} variant="h6">(IMG)</Typography>
                    </Link>
                </Box>
                
            </Box>
            <Divider sx={{backgroundColor: '#ffffff', height: '1px', width: '100%', }} />
        </Box>
    );
};

export default NavBar;