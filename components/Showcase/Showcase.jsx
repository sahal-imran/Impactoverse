import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import Slider from "react-slick";
import Image from "next/image";

const Showcase = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
        }}
      >
        {/* => Header */}
        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "56px", xs: "40px" },
            lineHeight: { md: "70px", xs: "48px" },
            fontWeight: 600,
            fontStyle: "normal",
            color: "#09248a",
            textAlign: "center",
          }}
        >
          How do we do this?
        </Typography>
      </Container>
    </Box>
  );
};

export default Showcase;
