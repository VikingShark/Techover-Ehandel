import { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import emailjs from "emailjs-com";
import supportImg from "../assets/Customer-support.png";
import { useTheme } from "@mui/material/styles";

const ContactPage = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_svv3tea",
        "template_3nubdka",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "u6x_pHkjAHVjsOPlp"
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
        }
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: { xs: 2, md: 2 },
      }}
    >
      {/* Bilden */}
      <Box
        component="img"
        src={supportImg}
        alt="Customer Support"
        sx={{
          width: { xs: "60%", md: "70%", lg: "50%" },
          height: { xs: "auto", md: "100%" },
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      {/* Formuläret */}
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
          Contact Us
        </Typography>
        <Divider
          sx={{ backgroundColor: theme.palette.primary.main, height: "2px", marginBottom: 4 }}
        />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.neutral.veryDarkBlue,
              fontWeight: "700",
              textTransform: "none",
              "&:hover": { backgroundColor: "hsl(26, 95.00%, 65%)" },
            }}
          >
            Send
          </Button>
        </form>
        {successMessage && (
          <Typography
            sx={{
              marginTop: 2,
              color: theme.palette.primary.main,
              fontWeight: "700",
            }}
          >
            {successMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactPage;