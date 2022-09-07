import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const WhatWeDo = () => {
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
            fontSize: { md: "18px", xs: "18px" },
            lineHeight: { md: "24px", xs: "24px" },
            fontWeight: 500,
            fontStyle: "normal",
            color: "black",
            textAlign: "center",
            maxWidth: "60%",
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
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: " column", md: "row" },
          width: "80%",
          mt: 8,
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "8PX",
            boxShadow: " 8px 8px 13px 0px rgba(0,0,0,0.2)",
            maxWidth: { xs: "350px", md: "500px" },
            pt: 3,
            transition: "all 0.3s ease",
            mx: { xs: 0, md: 4 },
            mb: { xs: 5, md: 0 },
          }}
        >
          {/* Card Upper Part */}
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
              Engagement for Results
            </Typography>

            {/* Card Lower Part */}
            <Box
              sx={{
                backgroundColor: "#FB8501",
                borderRadius: "0px 0px 6px 6px",
                mt: 2,
                px: 3,
                py: 2,
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
                  color: "white",
                  textAlign: "center",
                  maxWidth: "800px",
                }}
              >
                Brands and creators drive business outcomes via collabs with
                vetted orgs. NPOs and impact causes scale impact.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Card 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "8PX",
            boxShadow: " 8px 8px 13px 0px rgba(0,0,0,0.2)",
            maxWidth: { xs: "350px", md: "500px" },
            pt: 3,
            transition: "all 0.3s ease",
            mx: { xs: 0, md: 4 },
            mb: { xs: 5, md: 0 },
          }}
        >
          {/* Card Upper Part */}
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
                src={"/assets/pictures/Trust.svg"}
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
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
              {`Trust & Transparency`}
            </Typography>

            {/* Card Lower Part */}
            <Box
              sx={{
                backgroundColor: "#FB8501",
                borderRadius: "0px 0px 6px 6px",
                mt: 2,
                px: 3,
                py: 2,
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
                  color: "white",
                  textAlign: "center",
                  maxWidth: "800px",
                }}
              >
                We do the due diligence for you-vetting impact campaigns and
                ensuring transparency with reporting of impact outcomes.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
