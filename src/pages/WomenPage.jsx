import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardMedia,
  Modal,
  Box,
  IconButton,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
<<<<<<< HEAD
import img1 from "../assets/Women/image-product-1.jpg";
import img2 from "../assets/Women/image-product-2.jpg";
import img3 from "../assets/Women/image-product-3.jpg";
import img4 from "../assets/Women/image-product-4.jpg";
import { PRODUCT_DATA } from "../mock-data/Products.js";



const WomenPage = () => {
  console.log(PRODUCT_DATA);
  const images = [img1, img2, img3, img4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [modalImage, setModalImage] = useState(images[0]);
=======
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';

const WomenPage = () => {

  const images = [img1, img2, img3, img4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [modalImage, setModalImage] = useState(images[0])
>>>>>>> dev
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = (index) => {
<<<<<<< HEAD
    setCurrentIndex(index); // Update current index
    setMainImage(images[index]);
=======
    setCurrentIndex(index);  // Update current index
    setMainImage(images[index]); 
>>>>>>> dev
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  useEffect(() => {
<<<<<<< HEAD
=======
    if (open) {
      document.body.style.overflow = "hidden"; //
    } else {
      document.body.style.overflow = "auto"; // 
    }

    return () => {
      document.body.style.overflow = "auto"; // 
    };
  }, [open]);

  useEffect(() => {
>>>>>>> dev
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, currentIndex]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
<<<<<<< HEAD
    <Container
      disableGutters
      sx={{
        mt: 4,
      }}
    >
=======
    <Container disableGutters sx={{ 
      mt: 4 }}>
>>>>>>> dev
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
<<<<<<< HEAD
          flexWrap: { sx: "wrap", md: "nowrap" },
=======
          flexWrap: {sx: 'wrap' ,md: 'nowrap'}
>>>>>>> dev
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          flexDirection="column"
          sx={{ position: "relative" }}
        >
          <Card
<<<<<<< HEAD
            sx={{
              maxWidth: 500,
              maxHeight: 500,
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => {
              if (window.innerWidth >= 768) {
                handleOpen(currentIndex);
              }
            }}
=======
              sx={{ maxWidth: 500, maxHeight: 500, cursor: "pointer", position: "relative",}}
              onClick={() => {
                if (window.innerWidth >= 768) {
                  handleOpen(currentIndex);
                }                
              }}
>>>>>>> dev
          >
            <CardMedia
              component="img"
              image={mainImage}
              alt="Main product"
<<<<<<< HEAD
              sx={{
                borderRadius: 2,
                width: "100%",
                height: "100%",
                objectFit: "contain",
=======
              sx={{ 
                borderRadius: 2, 
                width:  "100%",
                height: "100%",
                objectFit: "contain", 
>>>>>>> dev
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            <IconButton
<<<<<<< HEAD
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: { xs: "flex", md: "none" },
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <ArrowBackIos sx={{ fontSize: 30 }} />
            </IconButton>

            {/* Right Arrow */}
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
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <ArrowForwardIos sx={{ fontSize: 30 }} />
            </IconButton>
=======
      onClick={handlePrev}
      sx={{
        position: "absolute",
        top: "50%",
        left: 10,
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: { xs: "flex", md: "none" }, 
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <ArrowBackIos sx={{ fontSize: 30 }} />
    </IconButton>

    {/* Right Arrow */}
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
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <ArrowForwardIos sx={{ fontSize: 30 }} />
    </IconButton>
>>>>>>> dev
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          spacing={2}
<<<<<<< HEAD
          sx={{
            mt: { xs: 1, md: 8 },
            mx: { xs: 2, md: 1 },
=======
          sx={{ 
            mt: { xs: 1, md: 8 }, 
            mx: { xs: 2, md: 1},

>>>>>>> dev
          }}
        >
          <Typography
            variant="h2"
            sx={{
<<<<<<< HEAD
              fontSize: { xs: 18, md: 22 },
              color: "hsl(219, 9%, 45%)",
              m: { xs: 0.5, md: 2 },
              fontWeight: 700,
              textAlign: "start",
=======
              fontSize: { xs:18, md:22},
              color: "hsl(219, 9%, 45%)",
              m: { xs: 0.5, md: 2 },
              fontWeight: 700,
              textAlign: 'start'
>>>>>>> dev
            }}
          >
            Sneaker company
          </Typography>
          <Typography
            variant="h1"
<<<<<<< HEAD
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: "bold",
              m: { xs: 0.5, md: 2 },
              pt: { xs: 0.5, md: 2 },
              color: "black",
              textAlign: "start",
            }}
=======
            sx={{ fontSize: { xs: 28, md:36}, fontWeight: "bold", m: { xs: 0.5, md: 2 }, pt: {xs: 0.5, md:2}, color: 'black', textAlign: 'start' }}
>>>>>>> dev
          >
            Fall Limited Edition Sneakers
          </Typography>
          <Typography
            variant="body1"
<<<<<<< HEAD
            sx={{
              fontSize: 16,
              m: { xs: 0.5, md: 2 },
              pt: { xs: 1, md: 4 },
              color: "hsl(219, 9%, 45%)",
              textAlign: "start",
              lineHeight: { xs: 1.5, md: 2 },
            }}
          >
            These low-profile sneakers are your perfect casual wear companion,
            Featuring a durable rubber outer solse, they'll withstand everything
            the weather can offer.
=======
            sx={{ fontSize: 16, m: { xs: 0.5, md:2}, pt: { xs: 1, md:4}, color: "hsl(219, 9%, 45%)", textAlign: 'start', lineHeight: {xs: 1.5, md:2} }}
          >
            These low-profile sneakers are your perfect casual wear companion, Featuring a durable rubber outer solse, they'll withstand everything the weather can offer.
>>>>>>> dev
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "space-between", md: "flex-start" },
<<<<<<< HEAD
              flexWrap: "wrap",
=======
              flexWrap: 'wrap',
>>>>>>> dev
              pt: 2,
              gap: { xs: 1, md: 1 },
            }}
          >
<<<<<<< HEAD
            <Box
              sx={{
                display: "flex",
                m: { xs: 0, md: 2 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "black", fontSize: { xs: 30 } }}
              >
                $125.00
              </Typography>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: 2,
                  p: 1,
                  ml: 2,
                }}
              >
                50%
              </Box>
            </Box>

            <Typography
              sx={{
                textDecoration: "line-through",
                fontWeight: "800",
                color: "hsl(219, 9%, 45%)",
                textAlign: "start",
                ml: { xs: "auto", md: 2 },
                pr: { xs: 1, md: 1 },
              }}
            >
              $250.00
            </Typography>
=======
            <Box sx={{
              display: 'flex',
              m: {xs: 0, md: 2}
            }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "black", fontSize: {xs: 30} }}>
              $125.00
            </Typography>
            <Box
              sx={{
                bgcolor: "black",
                color: "white",
                borderRadius: 2,
                p: 1,
                ml: 2,
              }}
            >
              50%
            </Box>
            </Box>
          
          <Typography
            sx={{
              textDecoration: "line-through",
              fontWeight: "800",
              color: "hsl(219, 9%, 45%)",
              textAlign: 'start',
              ml: { xs: "auto", md: 2 },
              pr: { xs: 1, md: 1 },
            }}
          >
            $250.00
          </Typography>
>>>>>>> dev
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
<<<<<<< HEAD
              mt: { xs: 1, md: 5 },
              bgcolor: "hsl(223, 64%, 98%)",
              borderRadius: 2,
              p: { xs: 0, md: 1 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "space-between", md: "center" },
                width: { xs: "100%", md: "auto" },
                mb: { xs: 1, md: 0 },
              }}
            >
=======
              mt: { xs: 1, md:5},
              bgcolor: "hsl(223, 64%, 98%)",
              borderRadius: 2,
              p: {xs: 0, md:1},
            }}
          >
            <Box sx={{ 
              display: "flex",
               alignItems: "center",
                  justifyContent: {xs: 'space-between', md:"center"},
                  width: { xs: "100%", md: "auto" }, 
                  mb: { xs: 1, md: 0 }, }}>

>>>>>>> dev
              <IconButton
                aria-label="remove"
                size="small"
                sx={{
                  color: "hsl(26, 100%, 55%)",
                  "&:focus": { outline: "none" },
<<<<<<< HEAD
                  "&:hover": { color: "hsl(26, 95.00%, 65%)" },
=======
                  "&:hover": {color: "hsl(26, 95.00%, 65%)"},
>>>>>>> dev
                  fontSize: "2rem",
                }}
                onClick={handleDecrease}
                disableRipple
              >
<<<<<<< HEAD
                <RemoveIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  mx: 4,
                  color: "black",
                  fontSize: { xs: 18, md: 28 },
                  fontWeight: "bold",
                }}
              >
=======
                <RemoveIcon  sx={{ fontSize: "inherit" }} />
              </IconButton>
              <Typography variant="h6" sx={{ mx: 4, color: 'black', fontSize: {xs: 18, md:28}, fontWeight: 'bold' }}>
>>>>>>> dev
                {quantity}
              </Typography>
              <IconButton
                aria-label="add"
                size="large"
                sx={{
                  fontSize: "2rem",
                  color: "hsl(26, 100%, 55%)",
                  "&:focus": { outline: "none" },
<<<<<<< HEAD
                  "&:hover": { color: "hsl(26, 95.00%, 65%)" },
=======
                  "&:hover": {color: "hsl(26, 95.00%, 65%)"},
>>>>>>> dev
                }}
                onClick={handleIncrease}
                disableRipple
              >
                <AddIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: 300 },
<<<<<<< HEAD
                height: { xs: 55, md: 60 },
=======
                height: {xs: 55, md: 60},
>>>>>>> dev
                bgcolor: "hsl(26, 100%, 55%)",
                color: "black",
                fontWeight: 800,
                borderRadius: 3,
<<<<<<< HEAD
                "&:hover": { bgcolor: "hsl(26, 95.00%, 65%)" },
=======
                "&:hover": {bgcolor: "hsl(26, 95.00%, 65%)"}
>>>>>>> dev
              }}
            >
              <AddShoppingCartIcon sx={{ mr: 2 }} />
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Thumbnail Row */}
      <Grid
        item
        xs={12}
        md={6}
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{ mt: 4, display: { xs: "none", md: "flex" } }}
      >
        {images.map((img, index) => (
<<<<<<< HEAD
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
=======
          <Box key={index} item xs={3} sm={2} md={2} sx={{ m: 2,  backgroundColor: mainImage === img ? "rgba(255, 255, 255, 0.3)" : "transparent", }}>
>>>>>>> dev
            <Card
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
                border:
                  mainImage === img ? "3px solid hsl(26, 100%, 65%)" : "none",
<<<<<<< HEAD
                position: "relative",
                "&:hover::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.4)", // White transparent overlay
                  borderRadius: "4px",
                },
                "&::after": {
                  content: mainImage === img ? '""' : "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.4)", // Highlighting effect
                },
              }}
=======
                  position: "relative",
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.4)", // White transparent overlay
                    borderRadius: "4px",
                  },
                  "&::after": {
                    content: mainImage === img ? '""' : "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.4)", // Highlighting effect
                  },
                }}
>>>>>>> dev
              onClick={() => {
                setMainImage(img);
                setCurrentIndex(index);
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Thumbnail ${index + 1}`}
<<<<<<< HEAD
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
=======
                sx={{ width: "100%", height: "100%", objectFit: "cover"          
                }}
>>>>>>> dev
              />
            </Card>
          </Box>
        ))}
      </Grid>

      {/* Modal with Arrows & Close Button */}
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
              image={modalImage}
              alt="Zoomed-in product"
              tabIndex={-1}
<<<<<<< HEAD
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 4,
                outline: "none",
                "&:focus": { outline: "none" },
              }}
=======
              sx={{ 
                 width: "100%",
                 height: "100%",
                 objectFit: "contain", 
                 borderRadius: 4,
                 outline: "none",
                 "&:focus": { outline: "none" }
                }}
>>>>>>> dev
            />
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}
            >
              {images.map((img, index) => (
                <Card
                  key={index}
                  sx={{
                    width: 75,
                    height: 75,
                    cursor: "pointer",
                    border:
<<<<<<< HEAD
                      modalImage === img
                        ? "2px solid hsl(26, 100%, 55%)"
                        : "none",
                    backgroundColor:
                      modalImage === img
                        ? "rgba(255, 255, 255, 0.4)"
                        : "transparent",
                    borderRadius: 2,
                    overflow: "hidden",
=======
                    modalImage === img
                        ? "2px solid hsl(26, 100%, 55%)"
                        : "none",
                        backgroundColor: 
                        modalImage === img ? "rgba(255, 255, 255, 0.4)" : "transparent",
                    borderRadius: 2,
                    overflow: 'hidden',
                    
>>>>>>> dev
                  }}
                  onClick={() => {
                    setModalImage(img);
                    setCurrentIndex(index);
                  }}
                >
<<<<<<< HEAD
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
                        content: modalImage === img ? '""' : "none",
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
                      image={img}
                      alt={`Thumbnail ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 2, //
                      }}
                    />
                  </Box>
=======
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
                            content: modalImage === img ? '""' : "none",
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
                          image={img}
                          alt={`Thumbnail ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", 
                            borderRadius: 2, // 
                          }}
                        />
                      </Box> 
>>>>>>> dev
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
<<<<<<< HEAD
                background: "none",
=======
                background: 'none'
>>>>>>> dev
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
<<<<<<< HEAD
              "&:hover": {
                backgroundColor: "white",
                color: "hsl(26, 100%, 55%)",
              },
            }}
=======
              "&:hover": { backgroundColor: "white", color: "hsl(26, 100%, 55%)" },
              }}
>>>>>>> dev
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
<<<<<<< HEAD
              "&:hover": {
                backgroundColor: "white",
                color: "hsl(26, 100%, 55%)",
              },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: 20 }} />
=======
              "&:hover": { backgroundColor: "white", color: "hsl(26, 100%, 55%)" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: 20  }} />
>>>>>>> dev
          </IconButton>
        </Box>
      </Modal>
    </Container>
  );
};

<<<<<<< HEAD

export default WomenPage;
export const getProducts = async ({ params }) => {
  await sleep(1500);
  return PRODUCT_DATA;
}
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
=======
export default WomenPage;
>>>>>>> dev
