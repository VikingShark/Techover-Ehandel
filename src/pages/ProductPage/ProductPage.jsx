import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { PRODUCT_DATA } from "../../mock-data/Products";
import ModalGallery from "../../components/ModalGallery";
import ImageGallery from "../../components/ImageGallery";
import ProductDetails from "../../components/ProductDetails";
import QuantitySelector from "../../components/QuantitySelector";
import AddToCartButton from "../../components/AddToCartButton ";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { CartContext } from "../../../context/CartState"; 

const ProductPage = () => {
  const { gender } = useParams();
  const genderMap = { women: "female", men: "male" };
  const filteredProducts = PRODUCT_DATA.filter(
    (p) => p.gender === genderMap[gender]
  );

  if (filteredProducts.length === 0)
    return <Typography>No products found.</Typography>;

  const product = filteredProducts[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(product.image[0]);
  const [modalIndex, setModalIndex] = useState(0);
  const modalImage = product.image[modalIndex];
  const { quantity, setQuantity } = useContext(CartContext); 
  const { cartItems, setCartItems } = useContext(CartContext); 
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % product.image.length;
    setCurrentIndex(newIndex);
    setMainImage(product.image[newIndex]);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + product.image.length) % product.image.length;
    setCurrentIndex(newIndex);
    setMainImage(product.image[newIndex]);
  };

  const handleClose = () => setOpen(false);

  const handleModalNext = () => {
    const newIndex = (currentIndex + 1) % product.image.length;
    setModalIndex((prev) => (prev + 1) % product.image.length);
  };

  const handleModalPrev = () => {
    const newIndex =
      (currentIndex - 1 + product.image.length) % product.image.length;
    setModalIndex(
      (prev) => (prev - 1 + product.image.length) % product.image.length
    );
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleImageClick = () => {
    if (isMediumUp) {
      setOpen(true);
    }
  };

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => {
      // Kontrollera om produkten redan finns i cartItems
      const existingProductIndex = prevCartItems.findIndex(
        (item) => item.product.id === product.id
      );
  
      if (existingProductIndex !== -1) {
        // Uppdatera kvantiteten för den befintliga produkten
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingProductIndex].quantity += quantity;
        return updatedCartItems;
      } else {
        // Lägg till den nya produkten i cartItems
        return [...prevCartItems, { product, quantity }];
      }
    });
    setQuantity(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container disableGutters sx={{ mx: { xs: 0, md: 10 } }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ImageGallery
            images={product.image}
            mainImage={mainImage}
            setMainImage={setMainImage}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            handleImageClick={handleImageClick}
            loading={loading}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProductDetails product={product} loading={loading} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "space-between", md: "space-evenly" },
              width: { xs: "auto%", md: "auto" },
              mb: { xs: 1, md: 0 },
              mt: { xs: 2, md: 2 },
              mx: { xs: 2, md: 0 },
            }}
          >
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
            {loading ? (
              <Skeleton variant="rectangular" width={150} height={40} />
            ) : (
              <AddToCartButton onClick={handleAddToCart} quantity={quantity} />
            )}
          </Box>
        </Grid>
      </Grid>

      {isMediumUp && (
        <ModalGallery
          open={open}
          setOpen={setOpen}
          images={product.image}
          handleClose={handleClose}
          handlePrev={handleModalPrev}
          handleNext={handleModalNext}
          modalIndex={modalIndex}
          setModalIndex={setModalIndex}
        />
      )}
    </Container>
  );
};

export default ProductPage;
