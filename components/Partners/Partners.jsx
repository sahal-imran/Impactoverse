import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";

const Partners = () => {
  //  => Partners Content

  const Partners_Content = [
    {
      img: "/assets/pictures/Montex.svg",
    },
    {
      img: "/assets/pictures/Bitcoin.svg",
    },
    {
      img: "/assets/pictures/Enjin.svg",
    },
    {
      img: "/assets/pictures/Polkadot.svg",
    },
    {
      img: "/assets/pictures/Ripple.svg",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 8,
        px: { xs: 1.5, md: 4 },
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
        Our Partners
      </Typography>
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* => Partners */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "100%",
            mt: { xs: 4, md: 8 },
            transition: "all 0.3s ease",
          }}
        >
          {/* => Showing Partners */}
          {Partners_Content.map((content, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
                position: "relative",
                transition: "all  0.3s ease",
                my: { xs: 1.5, md: 2 },
                mx: { xs: 3, md: 4 },
              }}
              key={index}
            >
              <Image src={`${content.img}`} layout="fill" objectFit="contain" />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
