import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Header Text */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 2,
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
          What do we do?
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "24px", xs: "16px" },
            lineHeight: { md: "32px", xs: "24px" },
            fontWeight: 500,
            fontStyle: "normal",
            color: "black",
            textAlign: "center",
            maxWidth: "800px",
            mt: 2,
          }}
        >
          Impactoverse is a next-gen Impact Marketing Ecosystem synergizing Web2
          and 3 for measurable results.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: " 8px 8px 13px 0px rgba(0,0,0,0.2)",
          borderRadius: "8px",
        }}
      >
        {/* Upper Part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flex: 0.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
                position: "relative",
                transition: "all  0.3s ease",
              }}
            >
              <Image
                src={"/assets/pictures/Engagement.svg"}
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontFamily: "Lato",
                fontSize: { md: "24px", xs: "16px" },
                lineHeight: { md: "32px", xs: "24px" },
                fontWeight: 700,
                fontStyle: "normal",
                color: "black",
                textAlign: "center",
                maxWidth: "800px",
                mt: 2,
              }}
            >
              Engagement for Results
            </Typography>
          </Box>
        </Box>

        {/* Bottom Part */}
        <Box
          sx={{
            backgroundColor: "#FB8501",
            p: 1,
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "Lato",
              fontSize: { md: "20px", xs: "16px" },
              lineHeight: { md: "28px", xs: "24px" },
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              maxWidth: "800px",
              mt: 2,
            }}
          >
            Brands and creators drive business outcomes via collabs with vetted
            orgs. NPOs and impact causes scale impact.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
