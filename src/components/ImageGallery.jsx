import React from "react";
import { Card, CardMedia, IconButton, Grid, Box, Skeleton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageGallery = ({
  images,
  mainImage,
  setMainImage,
  currentIndex,
  setCurrentIndex,
  handleImageClick,
  loading
}) => {
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  return (
    <Card
      sx={{ maxWidth: 500, cursor: "pointer", position: "relative", boxShadow: 'none', }}
      onClick={() => handleImageClick(true)}
    >
      {loading ? (
  <Skeleton variant="rectangular" width="100%" height={400} />
) : (
  <CardMedia component="img" image={mainImage} alt="Product" sx={{borderRadius: 4, height: {xs: '330px', md: '500px'}}} />

)}


      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          color: "black",
          bgcolor: 'white',
          "&:hover": {
            backgroundColor: "white",
            color: 'black',
          },
          "&:active": {
            backgroundColor: "white",
            color: 'black',
          },
          "&:focus": {
            backgroundColor: "white",
            outline: "none",
          },
          display: { xs: "flex", md: "none" },
          }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          color: "black",
          bgcolor: 'white',
          "&:hover": {
            backgroundColor: "white",
            color: 'black',
          },
          "&:active": {
            backgroundColor: "white",
            color: 'black',
          },
          "&:focus": {
            backgroundColor: "white",
            outline: "none",
          },
          display: { xs: "flex", md: "none" },
          }}
      >
        <ArrowForwardIos />
      </IconButton>


      <Grid
        item
        xs={12}
        md={6}
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{ mt: 4, display: { xs: "none", md: "flex" }, flexWrap: "nowrap" }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            item
            xs={3}
            sm={2}
            md={2}
            sx={{
              m: 2,
              backgroundColor:
                mainImage === img ? "rgba(255, 255, 255, 0.3)" : "transparent",
            }}
          >
                  {loading ? (
  <>
  <Skeleton variant="text" width={100} height={100} />

  </>
  ) : (
            <Card
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
                border:
                  mainImage === img ? "3px solid hsl(26, 100%, 65%)" : "none",
                position: "relative",
                "&:hover::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.4)", 
                  borderRadius: "4px",
                },
                "&::after": {
                  content: mainImage === img ? '""' : "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.4)", 
                },
              }}
              onClick={() => {
                setMainImage(img);
                setCurrentIndex(index);
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Thumbnail ${index + 1}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            )}
          </Box>
        ))}
      </Grid>

    </Card>
  );
};

export default ImageGallery;
