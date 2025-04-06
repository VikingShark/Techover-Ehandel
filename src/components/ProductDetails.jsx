import React from "react";
import { Typography, Box, Grid, Skeleton } from "@mui/material";

const ProductDetails = ({ product, loading }) => {
  return (
    <Grid
      item
      direction="column"
      spacing={2}
      sx={{
        mt: { xs: 1, md: 8 },
        mx: { xs: 2, md: 1 },
        width: { xs: 'auto', md: "100%",}
      }}
    >
        {loading ? (
  <>
    <Skeleton variant="text" width="60%" height={30} />
    <Skeleton variant="text" width="80%" height={40} />
    <Skeleton variant="text" width="100%" height={80} />
  </>
) : (
  <>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 18, md: 22 },
          color: "hsl(219, 9%, 45%)",
          m: { xs: 1, md: 2 },
          fontWeight: 600,
          textAlign: "start",
        }}
      >
        {product.subTitle}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: "bold",
          m: { xs: 0.5, md: 2 },
          pt: { xs: 0.5, md: 2 },
          color: "black",
          textAlign: "start",
          lineHeight: 1,
        }}
      >
        {product.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 18,
          m: { xs: 0.5, md: 2 },
          pt: { xs: 1, md: 4 },
          color: "hsl(219, 9%, 45%)",
          textAlign: "start",
          lineHeight: { xs: 1.5, md: 2 },
        }}
      >
        {product.description}
      </Typography>
        </>
    )}
    {loading ? (
            <Skeleton variant="text" width="30%" height={30} />
        ) : (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "space-between", md: "flex-start" },
          flexWrap: "wrap",
          pt: 2,
          gap: { xs: 1, md: 1 },
          mx: { xs: 0.5, md: 2 },
        }}
      >
        <Box
          sx={{
            gap: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "black", fontSize: { xs: 28, md: 30 } }}
          >
            ${ (product.price * product.discount).toFixed(2) }
          </Typography>
          <Box     sx={{
      bgcolor: "black",
      color: "white",
      fontWeight: 700,
      px: 1.5,
      py: 0.5,
      borderRadius: 2,
      fontSize: { xs: 16, md: 16 },
    }}>
            {product.discount * 100}%
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              textDecoration: "line-through",
              fontWeight: 700,
              color: "hsl(219, 9%, 45%)",
              textAlign: "start",
              ml: { xs: "auto", md: 0 },
              pr: { xs: 1, md: 1 },
              fontSize: 20,
            }}
          >
            ${product.price}.00
          </Typography>
        </Box>
      </Box>
         )}
    </Grid>
  );
};

export default ProductDetails;
