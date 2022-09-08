import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";

const Counter = () => {
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
        backgroundColor: "#f3f3f366",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          alignItems: "cetner",
          justifyContent: "center",
          flexDirection: "column",
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
          Impactoverse MarketPlace Launching Soon
        </Typography>

        {/* => Main Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Main Content => Heading */}
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "Lato",
              fontSize: { md: "30px", xs: "24px" },
              lineHeight: { md: "38px", xs: "32px" },
              fontWeight: 700,
              fontStyle: "normal",
              color: "black",
              textAlign: "center",
              maxWidth: "800px",
              mt: 8,
            }}
          >
            Sign up for updates from mission control!
          </Typography>

          {/* Main Content => CTA Button */}

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
            EMAIL OPT IN
          </Button>

          {/* Main Content => Countdown Timer*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Content => Countdown Timer >> Days*/}
            {/*         
        <Box></Box> */}
          </Box>
        </Box>
      </Container>
      {/* => Header */}
    </Box>
  );
};

export default Counter;
