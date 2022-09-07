import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Squash as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import CallMadeIcon from "@mui/icons-material/CallMade";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function Navbar() {
  // Drapdown states
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Hamburger
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const [Sub_Menu_For_Phone, Set_Sub_Menu_For_Phone] = useState(false);

  return (
    <>
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 3,
          height: { md: "100px", xs: "70px" },
          transition: "all 0.3s ease",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Logo => Left section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { md: "300px", xs: "200px" },
              height: "70px",
              position: "relative",
              transition: "all  0.3s ease",
            }}
          >
            <Image
              src={"/assets/pictures/Logo.svg"}
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>

          {/* Nav Items =>  Middle section */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <ScrollLink
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
              >
                <Button
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: "17px",
                    lineHeight: "26px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "white",
                    mr: 4,
                  }}
                >
                  {`New to NFT's?`}
                </Button>
              </ScrollLink>
              <ScrollLink
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
              >
                <Button
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: "17px",
                    lineHeight: "26px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "white",
                    mr: 4,
                  }}
                >
                  Marketplace
                </Button>
              </ScrollLink>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: "17px",
                    lineHeight: "26px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Explore
                  <KeyboardArrowDownIcon
                    sx={{ color: "white", fontSize: "22px", ml: 0.5 }}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Campaigns</MenuItem>
                  <MenuItem onClick={handleClose}>Brands</MenuItem>
                  <MenuItem onClick={handleClose}>Causes</MenuItem>
                  <MenuItem onClick={handleClose}>Creators</MenuItem>
                  <MenuItem onClick={handleClose}>PetDropNFT</MenuItem>
                  <MenuItem onClick={handleClose}>NFT How-to Hub</MenuItem>
                  <MenuItem onClick={handleClose}>FAQ</MenuItem>
                  <MenuItem onClick={handleClose}>Our Roadmap</MenuItem>
                  <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                </Menu>
              </Box>
            </Container>
          </Box>

          {/* Button =>  Right section */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
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
              }}
            >
              SIGN UP / LOG IN
            </Button>
          </Box>

          {/* Hamburger Ico */}
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <Hamburger
              rounded
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              size={28}
            />
          </Box>
        </Container>
        {/* Drawer */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          style={{ width: "100%" }}
          className="Drawer"
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              px: 2,
            }}
          >
            {/* Logo Bar */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                src={"/assets/pictures/Logo.svg"}
                width={200}
                height={70}
                objectFit="contain"
                priority
              />
              <Hamburger
                rounded
                color="black"
                toggled={isOpen}
                toggle={setOpen}
                size={28}
              />
            </Box>

            <Link href={""}>
              <AnchorLink
                onClick={toggleDrawer}
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Lato",
                  fontSize: "17px",
                  lineHeight: "26px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  whiteSpace: "nowrap",
                  color: "#FB8501",
                  width: "100%",
                  borderBottom: "1px solid #FB8501",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                  mt: 3,
                }}
              >
                {`New to NFT's?`}
                <CallMadeIcon sx={{ color: "#FB8501" }} />
              </AnchorLink>
            </Link>
            <Link href={""}>
              <AnchorLink
                onClick={toggleDrawer}
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Lato",
                  fontSize: "17px",
                  lineHeight: "26px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  whiteSpace: "nowrap",
                  color: "#FB8501",
                  width: "100%",
                  borderBottom: "1px solid #FB8501",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 3,
                  py: 1,
                }}
              >
                Marketplace
                <CallMadeIcon sx={{ color: "#FB8501" }} />
              </AnchorLink>
            </Link>
            <Box
              onClick={() => Set_Sub_Menu_For_Phone(!Sub_Menu_For_Phone)}
              sx={{
                textTransform: "capitalize",
                fontFamily: "Lato",
                fontSize: "17px",
                lineHeight: "26px",
                fontWeight: 600,
                fontStyle: "normal",
                whiteSpace: "nowrap",
                color: "#FB8501",
                width: "100%",
                borderBottom: "1px solid #FB8501",
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 3,
                py: 1,
              }}
            >
              Explore
              {Sub_Menu_For_Phone ? (
                <KeyboardArrowUpIcon sx={{ color: "#FB8501" }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ color: "#FB8501" }} />
              )}
            </Box>
            <Box
              sx={
                Sub_Menu_For_Phone
                  ? {
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      background: "#FB8501",
                      borderRadius: "4px",
                      mt: 2,
                      transition: "all 0.3s ease",
                      p: 3,
                    }
                  : {
                      width: "0px",
                      height: "0px",
                      overflow: "hidden",
                    }
              }
            >
              <Link href={""}>
                <AnchorLink
                  onClick={toggleDrawer}
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: 600,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "white",
                    width: "100%",
                    borderBottom: "1px solid white",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                  }}
                >
                  Campaigns
                  <CallMadeIcon sx={{ color: "white" }} />
                </AnchorLink>
              </Link>
              <Link href={""}>
                <AnchorLink
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: 600,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "white",
                    width: "100%",
                    borderBottom: "1px solid white",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    mt: 2,
                  }}
                >
                  Campaigns
                  <CallMadeIcon sx={{ color: "white" }} />
                </AnchorLink>
              </Link>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
