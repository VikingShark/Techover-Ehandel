import { Box, Card, CardMedia } from "@mui/material";

const Thumbnail = ({ images }) => {
  return (
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
  );
};

export default Thumbnail;
