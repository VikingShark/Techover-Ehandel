import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Chip,
  Box,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PRODUCT_DATA } from "../mock-data/products";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product, isMediumUp, loading }) => {
  const [mainImage, setMainImage] = useState(product.image && product.image[0]);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);

  const sliderSettings = {
    vertical: isMediumUp,
    verticalSwiping: isMediumUp,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    arrows: false,
    beforeChange: (_, next) => setMainImage(product.image[next]),
  };

  // Prevent rendering if product.image is undefined or empty
  if (!loading && (!product || !product.image || product.image.length === 0))
    return null;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      sx={{
        mt: 6,
        display: "flex",
      }}
    >
      <Link
        to={`/${product.gender === "female" ? "women" : "men"}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Card
          sx={{
            cursor: "pointer",
            boxShadow: 3,
            borderRadius: 2,
            position: "relative",
          }}
        >
          {/* Image Area */}
          <Box
            sx={{
              position: "relative",
              p: 1,
              display: "flex",
              flexDirection: isMediumUp ? "row" : "column",
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={220} />
            ) : (
              <>
                <CardMedia
                  component="img"
                  height="220"
                  image={mainImage}
                  alt={product.title}
                  sx={{
                    width: isMediumUp ? "75%" : "100%",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: isMediumUp ? "25%" : "100%",
                    mt: isMediumUp ? 0 : 1,
                    ml: isMediumUp ? 1 : 0,
                  }}
                >
                  <Slider {...sliderSettings}>
                    {product.image.map((img, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={img}
                        alt={`thumb-${i}`}
                        sx={{
                          width: "100%",
                          height: 60,
                          objectFit: "cover",
                          borderRadius: 1,
                          border:
                            mainImage === img
                              ? "2px solid #1976d2"
                              : "1px solid #ccc",
                        }}
                      />
                    ))}
                  </Slider>
                </Box>
              </>
            )}

            {/* Discount Chip */}
            {!loading && product.discount > 0 && (
              <Chip
                icon={<LocalOfferIcon />}
                label={`-${product.discount * 100}%`}
                color="error"
                size="large"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  fontWeight: "bold",
                  borderRadius: 1,
                }}
              />
            )}
          </Box>

          <CardContent>
            {loading ? (
              <>
                <Skeleton width="60%" />
                <Skeleton width="80%" />
                <Skeleton width="40%" />
              </>
            ) : (
              <>
                <Typography variant="subtitle1" color="textSecondary">
                  {product.subTitle}
                </Typography>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="h4">
                  ${product.price * (1 - product.discount)}
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    fontWeight: 700,
                    color: "hsl(219, 9%, 45%)",
                    fontSize: 16,
                  }}
                >
                  ${product.price}.00
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

const CollectionPage = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Our Collection
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {(loading ? Array(4).fill({}) : PRODUCT_DATA).map((product, index) => (
          <ProductCard
            key={index}
            product={product || PRODUCT_DATA[index]}
            loading={loading}
            isMediumUp={isMediumUp}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default CollectionPage;
