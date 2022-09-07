import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Quote = () => {
  return (
    <Box
      sx={{
        py: 4,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#D9D9D9",
        px: 2,
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
          src={"/assets/pictures/Quote.svg"}
          layout="fill"
          objectFit="contain"
          priority
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: { md: "32px", xs: "26px" },
          lineHeight: { md: "40px", xs: "34px" },
          fontWeight: 400,
          fontStyle: "italic",
          color: "black",
          textAlign: "center",
          transition: "all 0.23 ease",
        }}
      >
        {`"87 percent of consumers say they would purchase a product from a
        company that 'stood up or advocated for' an issue they care about."`}
        <Box
          span
          sx={{
            color: "#FB8501",
            textTransform: "capitalized",
            textAlign: "center",
          }}
        >
          -Deloitte
        </Box>
      </Typography>
    </Box>
  );
};

export default Quote;
