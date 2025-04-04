import React from "react";
import { Modal, Box, CardMedia, IconButton } from "@mui/material";
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageModal = ({ open, handleClose, modalImage, images, handleNext, handlePrev, setModalImage }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500 }}>
        <CardMedia component="img" image={modalImage} sx={{ width: "100%" }} />
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 10 }}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ position: "absolute", right: 10 }}>
          <ArrowForwardIos />
        </IconButton>
        <IconButton onClick={handleClose} sx={{ position: "absolute", top: -50, right: -20 }}>
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageModal;
