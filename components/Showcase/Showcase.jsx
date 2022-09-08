import React, { useRef } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Showcase = () => {
  // Slider Function
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider_ref = useRef();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: 8,
        px: { xs: 1.5, md: 4 },
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          alignItems: "cetner",
          justifyContent: "cetner",
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
          How do we do this?
        </Typography>

        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "32px", xs: "26px" },
            lineHeight: { md: "40px", xs: "34px" },
            fontWeight: 600,
            fontStyle: "normal",
            color: "#FB8501",
            textAlign: "center",
            mt: 3,
          }}
        >
          Categories of Campaigns
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: 8,
          }}
        >
          {/* => Slider */}
          <Slider ref={(c) => (slider_ref.current = c)} {...settings}>
            {Campaign_Card.map((item, index) => {
              return (
                <Box key={index} sx={{ px: 1 }}>
                  <Box
                    sx={{
                      height: "390px",
                      position: "relative",
                    }}
                  >
                    <Image src={item.img} layout="fill" objectFit="cover" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "start",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        p: 3,
                        background: "rgba(0,0,0,0.4)",
                      }}
                    >
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontFamily: "Lato",
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: 600,
                          fontStyle: "normal",
                          color: "white",
                          textAlign: "start",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontFamily: "Lato",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "white",
                          textAlign: "start",
                          mt: 0.5,
                        }}
                      >
                        {item.price}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          fontFamily: "Lato",
                          fontSize: "13px",
                          lineHeight: "20px",
                          fontWeight: 700,
                          fontStyle: "normal",
                          color: "white",
                          border: "1px solid white",
                          borderRadius: "10px",
                          textTransform: "capitalize",
                          mt: 1,
                          "&:hover": {
                            border: "1px solid white",
                          },
                        }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slider>
          <IconButton
            onClick={() => slider_ref.current.slickPrev()}
            sx={{
              background: "#FB8501",
              color: "white",
              "&:hover": { background: "#FB8501" },
              position: "absolute",
              top: "43%",
              left: "-18px",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => slider_ref.current.slickNext()}
            sx={{
              background: "#FB8501",
              color: "white",
              "&:hover": { background: "#FB8501" },
              position: "absolute",
              top: "43%",
              right: "-18px",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Showcase;

//=> Campaign Cards Data
const Campaign_Card = [
  {
    img: "/assets/pictures/NFT_Sample1.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample2.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample3.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample4.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample1.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample2.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample3.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
  {
    img: "/assets/pictures/NFT_Sample4.svg",
    price: "$175",
    name: "Love's Philadelphia",
  },
];
