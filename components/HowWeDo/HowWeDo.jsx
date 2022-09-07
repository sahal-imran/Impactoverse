import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const HowWeDo = () => {
  const Card_Content = [
    {
      img: "/images/Initiatives.svg",
      title: "Vetted Initiatives",
    },
    {
      img: "/images/Marketplace.svg",
      title: "NFT Marketplace",
    },
    {
      img: "/images/Collaborations.svg",
      title: "Collaborations",
    },
    {
      img: "/images /Community.svg",
      title: "Community Building",
    },
    {
      img: "/images/Reporting.svg",
      title: "Reporting",
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
      }}
    >
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
      <Box></Box>
    </Box>
  );
};

export default HowWeDo;
