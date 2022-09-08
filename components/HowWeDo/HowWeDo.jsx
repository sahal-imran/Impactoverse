import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

const HowWeDo = () => {
  const Card_Content = [
    {
      img: "/assets/pictures/Initiative.svg",
      title: "Vetted Initiatives",
    },
    {
      img: "/assets/pictures/Marketplace.svg",
      title: "NFT Marketplace",
    },
    {
      img: "/assets/pictures/Collaborations.svg",
      title: "Collaborations",
    },
    {
      img: "/assets/pictures/Community.svg",
      title: "Community Building",
    },
    {
      img: "/assets/pictures/Reporting.svg",
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
        How do we do this?
      </Typography>

      {/* => Cards Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "80%",
          height: "100%",
          mt: { xs: 4, md: 8 },
          transition: "all 0.3s ease",
        }}
      >
        {Card_Content.map((content, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: { xs: "230px", md: "270px" },
              transition: "all 0.3s ease",
              height: "250px",
              border: "2px solid #00000012",
              borderRadius: "8px",
              backgroundColor: "#f3f3f366",
              mx: 2,
              my: 2,
              px: 2,
              py: 2,
              "&:hover": {
                boxShadow: "27px 32px 15px -26px rgba(0,0,0,0.28);",
                scale: "0.9",
              },
            }}
            key={index}
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
                flex: 0.6,
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
                fontSize: { md: "28px", xs: "22px" },
                lineHeight: { md: "36px", xs: "28px" },
                fontWeight: 400,
                fontStyle: "normal",
                color: "black",
                textAlign: "center",
                flex: 0.4,
                mt: 3,
              }}
            >
              {content.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* => Bottom Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
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
          Done For You Service
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mx: 2,
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "Lato",
              fontSize: "13px",
              lineHeight: "21px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#FB8501",
              textAlign: "center",
            }}
          >
            Find Out More
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "8px",
              position: "relative",
              transition: "all  0.3s ease",
            }}
          >
            <Image
              src={"/assets/pictures/LineArrow.svg"}
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeDo;
