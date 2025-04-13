import { Box, Container, Typography } from "@mui/material";
import CollectionPage from "./CollectionPage";

const HomePage = () => {
    return (
        <Container maxWidth="lg">
        <Box sx={{height: '100vh'}}>
            <CollectionPage />
        </Box>
        </Container>
    )
}

export default HomePage;