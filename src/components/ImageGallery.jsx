import React from "react";
import { Card, CardMedia, IconButton, Grid, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageGallery = ({ images, mainImage, setMainImage, handleOpen, handlePrev, handleNext, currentIndex }) => {
  return (
    <Grid item xs={12} md={6} container justifyContent="center" flexDirection="column">
      <Card sx={{ maxWidth: 500, cursor: "pointer" }} onClick={() => handleOpen(currentIndex)}>
        <CardMedia component="img" image={mainImage} alt="Main product" sx={{ borderRadius: 2, width: "100%" }} />
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 10 }}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ position: "absolute", right: 10 }}>
          <ArrowForwardIos />
        </IconButton>
      </Card>

      {/* Thumbnail Row */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {images.map((img, index) => (
          <Box key={index} sx={{ cursor: "pointer", border: mainImage === img ? "3px solid orange" : "none" }}>
            <CardMedia component="img" image={img} alt={`Thumbnail ${index}`} sx={{ width: 100, height: 100 }} onClick={() => setMainImage(img)} />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ImageGallery;
