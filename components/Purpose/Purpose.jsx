import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

const Purpose = () => {
  const Card_Content = [
    {
      img: "/assets/pictures/Brands.svg",
      title: "Brands & Agencies",
      description:
        "Align campaigns with vetted causes  to drive customer loyalty and build brand community.",
    },
    {
      img: "/assets/pictures/Npo.svg",
      title: "NPOs and Causes",
      description:
        "Learn and collaborate to drive engagement and scale your impact.",
    },
    {
      img: "/assets/pictures/Creators.svg",
      title: "Creators & Supporters",
      description: "Showcase your NFTs, collab with a cause, build community.",
    },
    {
      img: "/assets/pictures/Influencers.svg",
      title: "Influencers",
      description:
        "Skyrocket fan engagementin exciting new ways, scale your brand  impact.",
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
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
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
          What is impactoverse for?
        </Typography>

        {/* => Cards Container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "100%",
            mt: { xs: 4, md: 8 },
            transition: "all 0.3s ease",
          }}
        >
          {/* => Rendering all the cards */}
          {Card_Content.map((content, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                width: { xs: "230px", md: "320px" },
                transition: "all 0.3s ease",
                height: { xs: "350px", md: "320px" },
                border: "2px solid #00000012",
                borderRadius: "8px",
                backgroundColor: "#f3f3f366",
                mx: 2,
                my: 2,
                px: 2,
                py: 2,
              }}
              key={index}
            >
              {/* => Card Top */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: 0.4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70px",
                    height: "70px",
                    position: "relative",
                    transition: "all  0.3s ease",
                  }}
                >
                  <Image
                    src={`${content.img}`}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </Box>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: { md: "26px", xs: "22px" },
                    lineHeight: { md: "32px", xs: "28px" },
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: "black",
                    textAlign: "center",
                    mt: 3,
                  }}
                >
                  {content.title}
                </Typography>
              </Box>

              {/* => Card Bottom */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: 0.6,
                }}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: { md: "18px", xs: "18px" },
                    lineHeight: { md: "24px", xs: "24px" },
                    fontWeight: 500,
                    fontStyle: "normal",
                    color: "black",
                    textAlign: "center",
                    my: 2,
                  }}
                >
                  {content.description}
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
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#FB8501",
            px: 4,
            py: 1,
            mt: 6,
            fontSize: "20px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#FB8501",
            },
          }}
        >
          SIGN UP
        </Button>
      </Container>
    </Box>
  );
};

export default Purpose;
