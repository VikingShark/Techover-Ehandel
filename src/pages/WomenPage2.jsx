import React, { useState, useEffect } from "react";
import { Container, Grid, Skeleton } from "@mui/material";
import ProductImage from "../components/ProductImage";
// import ProductInfo from "./ProductInfo";
import { PRODUCT_DATA } from "../mock-data/Products.js";

const getImagesByGender = (data, gender) => {
  return data
    .filter(product => product.gender === gender)
    .flatMap(product => product.image);
};
const WomenPage2 = () => {
  const images = getImagesByGender(PRODUCT_DATA, 'female');
  const [mainImage, setMainImage] = useState(images[0]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), );
    return () => clearTimeout(timer);
  }, []);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

 

  return (
    <Container disableGutters sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ flexWrap: { sx: "wrap", md: "nowrap" } }}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          {loading ? <Skeleton variant="rectangular" width="100%" height={500} /> : <ProductImage images={images} mainImage={mainImage} setMainImage= {setMainImage } />}
        </Grid>
        {/* 
        Product Info Section
        <Grid item xs={12} md={6}>
          {loading ? <Skeleton variant="rectangular" width="100%" height={300} /> : <ProductInfo quantity={quantity} setQuantity={setQuantity} />}
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default WomenPage2;
