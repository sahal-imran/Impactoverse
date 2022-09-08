import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

const Footer = () => {
  //Footer => Explore Content
  const Explore_Content = [
    {
      detail: "For Creators & Supporters",
    },
    {
      detail: "For Brands",
    },
    {
      detail: "For NPOs & Causes",
    },
    {
      detail: "DIY campaigns",
    },
    {
      detail: "DFY campaigns (landing page for signup for meeting)",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
        px: { xs: 1.5, md: 4 },
      }}
    >
      {/* => Footer Left */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "24px", xs: "24px" },
            lineHeight: { md: "32px", xs: "32px" },
            fontWeight: 700,
            fontStyle: "normal",
            color: "black",
            textAlign: "center",
            maxWidth: "800px",
            mt: 2,
          }}
        >
          Get our updates
        </Typography>
        <Button
          variant="contained"
          sx={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#FB8501",
            px: 2.5,
            py: 1,
            fontWeight: 500,
            whiteSpace: "nowrap",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#FB8501",
            },
            my: 1.5,
          }}
        >
          Email opt in
        </Button>
      </Box>
      {/* => Footer Middle */}
      <Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "24px", xs: "24px" },
            lineHeight: { md: "32px", xs: "32px" },
            fontWeight: 700,
            fontStyle: "normal",
            color: "black",
            textAlign: "center",
            maxWidth: "800px",
            mt: 2,
          }}
        >
          Explore
        </Typography>
        <Box></Box>
      </Box>
      {/* => Footer Right */}
      <Box>Right</Box>
    </Box>
  );
};

export default Footer;
