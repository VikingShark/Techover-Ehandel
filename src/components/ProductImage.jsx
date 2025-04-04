import React, { useState, useEffect } from "react";
import { Card, CardMedia, Box, IconButton, Modal } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import ModalImage from "./ModalImage";
import ThumbnailImages from "./ThumbnailImages"; 


const ProductImage = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [modalImage, setModalImage] = useState(images[0]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setModalImage(images[index]);
    setOpen(true);
  };

     setOpen(false);
   };
   const handleClose = () => {

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
    setModalImage(images[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
    setModalImage(images[newIndex]);
  };

  return (
    <Box>
      {/* Main Product Image */}
      <Card
        sx={{ maxWidth: 500, maxHeight: 500, cursor: "pointer", position: "relative" }}
        onClick={() => window.innerWidth >= 768 && handleOpen(currentIndex)}
      >
        <CardMedia
          component="img"
          image={mainImage}
          alt="Main product"
          sx={{ borderRadius: 2, width: "100%", height: "100%", objectFit: "contain" }}
        />
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: { xs: "flex", md: "none" },
          }}
        >
          <ArrowBackIos sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: { xs: "flex", md: "none" },
          }}
        >
          <ArrowForwardIos sx={{ fontSize: 30 }} />
        </IconButton>
      </Card>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2  }}>
            {images.map((img, index) => (
              <Card
                key={index}
                sx={{
                  width: 75,
                  height: 75,
                  cursor: "pointer",
                  border: mainImage === img ? "3px solid hsl(26, 100%, 65%)" : "none",
                  m: 1,
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: '#ffffff40',
                  }           
                  
                }}
                onClick={() => {
                  setMainImage(img);
                  setCurrentIndex(index);
                }}
              >
                <CardMedia component="img" image={img} alt={`Thumbnail ${index + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Card>
            ))}
          </Box>

          {/* <ModalImage images={images} />   */}

      {/* Modal
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "90vw",
            maxWidth: 500,
            maxHeight: 500,
            aspectRatio: "1 / 1",
            borderRadius: "20px",
            outline: "none",
            backgroundColor: "white",
          
          }}
        >
          <CardMedia
            component="img"
            image={modalImage}
            alt="Zoomed-in product"
            sx={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 4 }}
          />
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: -100, right: -20, color: "black", 
          "&:hover": {
                transform: "scale(1.1)",
                color: "hsl(26, 100%, 55%)",
                background: "none",} }}>
            <Close sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={handlePrev} sx={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", color: "black", bgcolor: "white", 
                "&:hover": {
                backgroundColor: "white",
                color: "hsl(26, 100%, 55%)",
              }, }}>
            <ArrowBackIos sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", color: "black", bgcolor: "white",
                "&:hover": {
                backgroundColor: "white",
                color: "hsl(26, 100%, 55%)",
              }, }}>
            <ArrowForwardIos sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default ProductImage;
