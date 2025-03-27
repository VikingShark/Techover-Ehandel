import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from '../components/NavBar'

const RootLayout = () => {
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