import { Box, Typography, Divider } from "@mui/material";
import officeTeamImg from "../assets/office-team.png";
import { useTheme } from "@mui/material/styles";

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column",  md: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: { xs: 2, md: 4 },
      }}
    >
      <Box
        component="img"
        src={officeTeamImg}
        alt="Office Team"
        sx={{
          width: { xs: "100%", lg: "50%" },
          height: { xs: "auto", md: "100%" },
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          backgroundColor: theme.palette.neutral.white,
          color: theme.palette.neutral.veryDarkBlue,
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            marginBottom: 2,
            color: theme.palette.neutral.veryDarkBlue,
          }}
        >
          About Us
        </Typography>
        <Divider
          sx={{ backgroundColor: theme.palette.primary.main, height: "2px", marginBottom: 4 }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.8,
            marginBottom: 4,
            textAlign: "left",
          }}
        >
          Welcome to our e-commerce platform! We are dedicated to providing you
          with the best shopping experience, offering a wide range of
          high-quality products for men and women. Our mission is to combine
          style, comfort, and affordability to meet your needs.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.8,
            marginBottom: 4,
            textAlign: "left",
          }}
        >
          At our core, we value customer satisfaction and strive to deliver
          exceptional service. Whether you're looking for the latest trends or
          timeless classics, we've got you covered. Thank you for choosing us
          as your go-to destination for all your shopping needs.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.8,
            textAlign: "left",
          }}
        >
          If you have any questions or feedback, feel free to reach out to us.
          We're here to help!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;