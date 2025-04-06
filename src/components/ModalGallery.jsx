import React from "react";
import { Modal, Box, CardMedia, IconButton, Card } from "@mui/material";
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ModalGallery = ({ open, handleClose, images, handleNext, handlePrev,  setModalIndex, modalIndex }) => {

  const modalImage = images[modalIndex];

  return (
    <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90vw",
        maxWidth: 500,
        maxHeight: 500,
        aspectRatio: "1 / 1",
        borderRadius: "20px",
        outline: "none",
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <CardMedia
          component="img"
          image={images[modalIndex]}
          alt="Zoomed-in product"
          tabIndex={-1}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 4,
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        />
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}
        >
{images.map((image, index) => (
  <Card
    key={index}
    sx={{
      width: 75,
      height: 75,
      cursor: "pointer",
      border: modalIndex === index ? "2px solid hsl(26, 100%, 55%)" : "none",
      backgroundColor: modalIndex === index ? "rgba(255, 255, 255, 0.4)" : "transparent",
      borderRadius: 2,
      overflow: "hidden",
    }}
    onClick={() => setModalIndex(index)}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        "&:hover::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
        },
        "&::after": {
          content: modalIndex === index ? '""' : "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`Thumbnail ${index + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
    </Box>
  </Card>
))}

        </Box>
      </Box>
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: -100,
          right: -20,
          color: "white",
          "&:hover": {
            transform: "scale(1.1)",
            color: "hsl(26, 100%, 55%)",
            background: "none",
          },
        }}
      >
        <Close sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "45%",
          height: 40,
          width: 40,
          left: -19,
          color: "black",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "hsl(26, 100%, 55%)",
          },
        }}
      >
        <ArrowBackIos sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "45%",
          height: 40,
          width: 40,
          right: -21,
          color: "black",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "hsl(26, 100%, 55%)",
          },
        }}
      >
        <ArrowForwardIos sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  </Modal>
  );
};

export default ModalGallery;
