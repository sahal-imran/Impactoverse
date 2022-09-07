import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

// {Importing Images  => For how we do?}
import Initiatives from "../../public/images/Initiatives.svg";
import Marketplace from "../../public/images/Marketplace.svg";
import Collaborations from "../../public/images/Collaborations.svg";
import Community from "../../public/images /Community.svg";
import Reporting from "../../public/images/Reporting.svg";

const HowWeDo = () => {
  const Card_Content = [
    {
      img: Initiatives,
      title: "Vetted Initiatives",
    },
    {
      img: Marketplace,
      title: "NFT Marketplace",
    },
    {
      img: Collaborations,
      title: "Collaborations",
    },
    {
      img: Community,
      title: "Community Building",
    },
    {
      img: Reporting,
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
