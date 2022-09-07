import React from "react";
import ReactPlayer from "react-player";
import { Box, Container, Button } from "@mui/material";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Box
      className="player-wrapper"
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        "& video": { objectFit: "cover" },
        transition: "all 0.3s ease",
        mt: { md: "-100px", xs: "-70px" },
      }}
    >
      <ReactPlayer
        className="react-player"
        url="/assets/videos/Intro.mp4"
        width="100%"
        height="100%"
        playsinline={true}
        muted={true}
        playing={true}
        loop={true}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: 2,
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
            color: "white",
            textAlign: "center",
            textShadow: "0px 0px 9px rgba(0,0,0,0.4)",
          }}
        >
          Collabs To Scale Impact
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontFamily: "Lato",
            fontSize: { md: "24px", xs: "16px" },
            lineHeight: { md: "32px", xs: "24px" },
            fontWeight: 500,
            fontStyle: "normal",
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
            textShadow: "0px 0px 9px rgba(0,0,0,0.4)",
            mt: 2,
          }}
        >
          Impactoverse is a next-gen Impact Marketing Ecosystem synergizing Web2
          and 3 for measurable results.
        </Typography>

        {/* Auth button for phone */}
        <Button
          variant="contained"
          sx={{
            display: { md: "none", xs: "block" },
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#FB8501",
            width: "80%",
            height: "46px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            maxWidth: "300px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#FB8501",
            },
            transition: "all 0.3s ease",
            mt: 3,
          }}
        >
          SIGN UP / LOG IN
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
