import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'


const RootLayout = ({ NavBar }) => {
    return (
        <Box>
            <NavBar />
            <main style={{marginTop: '150px'}}>
                <Outlet />
            </main>
        </Box>
    );
};

export default RootLayout;