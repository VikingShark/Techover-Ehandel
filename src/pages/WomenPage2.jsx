import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import ImageGallery from "../components/ImageGallery.jsx";
import ImageModal from "../components/ImageModal.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import QuantitySelector from "../components/QuantitySelector.jsx";
import AddToCartButton from "../components/AddToCartButton .jsx";
// import img1 from "../assets/Women/image-product-1.jpg";
// import img2 from "../assets/Women/image-product-2.jpg";
// import img3 from "../assets/Women/image-product-3.jpg";
// import img4 from "../assets/Women/image-product-4.jpg";

import { PRODUCT_DATA } from "../mock-data/Products.js";

const getImagesByGender = (data, gender) => {
  return data
    .filter(product => product.gender === gender)
    .flatMap(product => product.image);
};


const WomenPage2 = () => {
  const images = getImagesByGender(PRODUCT_DATA, 'female')
  const [mainImage, setMainImage] = useState(images[0]);
  const [modalImage, setModalImage] = useState(images[0]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Container disableGutters sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <ImageGallery images={images} mainImage={mainImage} setMainImage={setMainImage} handleOpen={handleOpen} handlePrev={handlePrev} handleNext={handleNext} currentIndex={currentIndex} />
        <Grid item xs={12} md={6}>
          <ProductDetails />
          <QuantitySelector quantity={quantity} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
          <AddToCartButton />
        </Grid>
      </Grid>

      <ImageModal open={open} handleClose={handleClose} modalImage={modalImage} images={images} handleNext={handleNext} handlePrev={handlePrev} setModalImage={setModalImage} />
    </Container>
  );
};

export default WomenPage2;
