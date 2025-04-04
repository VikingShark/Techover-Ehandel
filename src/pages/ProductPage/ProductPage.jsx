import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container, Grid, Card, CardMedia, Typography, Box, Button, IconButton
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { PRODUCT_DATA } from "../../mock-data/Products";

const ProductPage = () => {
  const { gender } = useParams(); // Get gender from URL
  const genderMap = {
    women: "female",
    men: "male"
  };
  const filteredProducts = PRODUCT_DATA.filter((p) => p.gender === genderMap[gender]);

  if (filteredProducts.length === 0) return <Typography>No products found.</Typography>;

  const product = filteredProducts[0]; // Assuming one product per category
  const images = product.image;
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 500, cursor: "pointer", position: "relative" }}>
            <CardMedia component="img" image={mainImage} alt="Product" sx={{ width: "100%" }} />
            <IconButton onClick={handlePrev} sx={{ position: "absolute", top: "50%", left: 10 }}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ position: "absolute", top: "50%", right: 10 }}>
              <ArrowForwardIos />
            </IconButton>
          </Card>
        </Grid>

        {/* Product Info Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">{product.subTitle}</Typography>
          <Typography variant="h4" fontWeight="bold">{product.titel}</Typography>
          <Typography variant="body1">{product.description}</Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography variant="h5" fontWeight="bold">${product.price * product.discount}</Typography>
            <Typography sx={{ textDecoration: "line-through", ml: 2 }}>${product.price}</Typography>
          </Box>

          {/* Quantity & Add to Cart */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
            <Typography sx={{ mx: 2 }}>{quantity}</Typography>
            <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
          </Box>

          <Button variant="contained" sx={{ mt: 2 }} startIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
