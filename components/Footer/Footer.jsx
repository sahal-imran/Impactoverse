import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import AnchorLink from "@mui/material/Link";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Image from "next/image";

const Footer = () => {
  //Footer => Explore Content
  const Explore_Content = [
    {
      detail: "For Creators & Supporters",
      path: "/",
    },
    {
      detail: "For Brands",
      path: "/",
    },
    {
      detail: "For NPOs & Causes",
      path: "/",
    },
    {
      detail: "DIY campaigns",
      path: "/",
    },
    {
      detail: "DFY campaigns (landing page for signup for meeting)",
      path: "/",
    },
  ];

  const Footer_Right = [
    {
      detail: "NFT How-to Hub",
      path: "/",
    },
    {
      detail: "FAQs",
      path: "/",
    },
    {
      detail: "Our Roadmap",
      path: "/",
    },
    {
      detail: "Our Technologies",
      path: "/",
    },
    {
      detail: "Contact Us",
      path: "/",
    },
    {
      detail: "Our Team",
      path: "/",
    },
  ];

  //   => Social Media Icons

  const Social_Icons = [
    {
      img: "/assets/pictures/Facebook.svg",
      link: "https://facebook.com",
    },
    {
      img: "/assets/pictures/Instagram.svg",
      link: "https://instagram.com",
    },
    {
      img: "/assets/pictures/LinkedInn.svg",
      link: "https://linkednn.com",
    },
    {
      img: "/assets/pictures/Twitter.svg",
      link: "https://twitter.com",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 4,
        backgroundColor: "#77bfe2",
        transition: "all 0.3s ease",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Grid container spacing={0}>
            {/*=> Footer Left */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Footer Left => Top */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: " center",
                    alignItems: "start",
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
                      my: 3,
                      mt: 6,
                    }}
                  >
                    Email opt in
                  </Button>
                </Box>

                {/* Footer Left => Bottom */}

                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: " center",
                    alignItems: "start",
                    mt: 3,
                  }}
                >
                  {Social_Icons.map((icon, index) => (
                    <AnchorLink href={`${icon.link}`}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "26px",
                          height: "26px",
                          position: "relative",
                          transition: "all  0.3s ease",
                          my: 2,
                          mx: 1,
                        }}
                        key={index}
                      >
                        <Image
                          src={`${icon.img}`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </Box>
                    </AnchorLink>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/*=> Footer Middle*/}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: { xs: 2, md: 0 },
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
                    textAlign: "left",
                    maxWidth: "800px",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Explore
                </Typography>
                <Box
                  sx={{
                    dispaly: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    transition: "all 0.3s ease",
                  }}
                >
                  {Explore_Content.map((content, index) => (
                    <Link href={`${content.path}`} key={index}>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontFamily: "Lato",
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "#ffffff",
                          textAlign: "left",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#ffffffbd",
                          },
                          mb: 2,
                          maxWidth: { xs: "200px", md: "200px" },
                        }}
                      >
                        {content.detail}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/*=> Footer Right */}

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: { xs: 0, md: 2 },
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
                    textAlign: "left",
                    opacity: "0",
                    display: { xs: "none", md: "block" },
                    mb: 2,
                  }}
                >
                  Explore
                </Typography>
                {Footer_Right.map((content, index) => (
                  <Link href={`${content.path}`} key={index}>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        fontFamily: "Lato",
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "#ffffff",
                        textAlign: "left",
                        transition: "all 0.3s ease",
                        maxWidth: "180px",
                        "&:hover": {
                          color: "#ffffffbd",
                        },
                        mb: 2,
                        maxWidth: { xs: "100%", md: "200px" },
                      }}
                    >
                      {content.detail}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Socila Icons => Mobile View */}

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: " center",
                  alignItems: "start",
                  mt: 3,
                }}
              >
                {Social_Icons.map((icon, index) => (
                  <AnchorLink href={`${icon.link}`} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "26px",
                        height: "26px",
                        position: "relative",
                        transition: "all  0.3s ease",
                        my: 2,
                        mx: 1,
                      }}
                    >
                      <Image
                        src={`${icon.img}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                  </AnchorLink>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "black",
          py: 1,
          mt: 3,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: 500,
            fontStyle: "normal",
            color: "#ffffff",
            textAlign: "center",
            transition: "all 0.3s ease",
            width: "100%",
            "&:hover": {
              color: "#ffffffbd",
            },
          }}
        >
          Copyright <CopyrightIcon /> 2022. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
