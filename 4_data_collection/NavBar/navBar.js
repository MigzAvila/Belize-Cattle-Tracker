import React, { useEffect, useState } from "react";
import Link from "next/link";
import navStyle from "../../styles/NavBar.module.css";
import { useSpring, animated } from "react-spring";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// relative paths and names for navigation bar
const link = [
  { href: "/", Name: "Home" },
  { href: "/MainPages/AboutUs ", Name: "About Us" },
  { href: "/MainPages/ContactUs", Name: "Contact Us" },
  { href: "/MainPages/GenerateReport", Name:"Generate Report"},
  { href: "/MainPages/create_cattle_info", Name:"Cattle Info"}
];

const Admin = [{ href: "/Admin/AdminHome", Name: "Admin" }];

const navBar = () => {
  const [isBurgerNav, setIsBurgerNav] = useState(false); //to display hamburger menu icon
  const [isShowNav, setIsShowNav] = useState(false); //to display nav bar when less than 600px

  const [currentNavBar, setCurrentNavBar] = useState([]);

  //to change nav bar for customer or admin based on role ID
  const [roleID, setRoleId] = useState(1);

  //breakpoints
  const mediaQuery = useMediaQuery(useTheme().breakpoints.down("sm"));
  const mediumMediaQuery = useMediaQuery(
    useTheme().breakpoints.between("601", "785")
  );

  useEffect(() => {
    mediaQuery ? setIsBurgerNav(true) : setIsBurgerNav(false),
      setIsShowNav(false);
  }, [mediaQuery]);

  //here the firebase will change ID based on login
  useEffect(() => {
    roleID === 1 ? setCurrentNavBar(link) : setCurrentNavBar(Admin);
  }, [roleID]);

  //odd index vertical nav transition
  const oddIndex = useSpring({
    opacity: 1,
    reset: isShowNav,
    transform: "translateX(0px)",
    from: {
      opacity: 0,
      transform: "translateX(-250px)",
    },
  });

  //even Index vertical nav transition
  const evenIndex = useSpring({
    opacity: 1,
    reset: isShowNav,
    transform: "translateX(0px)",
    from: {
      opacity: 0,
      transform: "translateX(250px)",
    },
  });

  //burger icon transition
  const burgerProps = useSpring({
    to: mediaQuery ? { opacity: 1 } : { opacity: 0 },
    from: mediaQuery ? { opacity: 0 } : { opacity: 1 },
    delay: 300,
  });

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    fontSize: mediumMediaQuery ? "17px" : "25px",
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
    opacity: 0.8,
    borderRadius: "none",
    color: "#212121",
    fontFamily: "roboto",
    textShadow: "2px 5px 8px black",
    color: "white",
    "&:hover": {
      opacity: 1,
      color: "#d84315",
    },
  }));

  //opens the hamburger menu
  const handleBurgerMenu = () => {
    setIsShowNav((prevState) => !prevState);
  };

  //displays navigation bar
  const Links = ({ linkName, linkRef, index }) => {
    return (
      <>
        <Typography component="div">
          <Item className={navStyle.line} >
            <Link item xs={2} href={linkRef}>
              {linkName}
            </Link>
          </Item>
        </Typography>
      </>
    );
  };

  return (
    <Box sx={{ paddingBottom: "15px" }}>
      <Grid
        container
        direction={mediaQuery ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
      >
        {/* Nav bar for md to lg screen size */}
        {!mediaQuery && (
          <>
            {currentNavBar.map((item, index) => (
              <Links
                linkName={item.Name}
                linkRef={item.href}
                index={index}
                key={index}
              />
            ))}
          </>
        )}

        {/*  Display when screen size gets less than 600px  */}
        {isShowNav &&
          currentNavBar.map((item, index) => (
            <animated.div
              key={index}
              style={index % 2 === 0 ? evenIndex : oddIndex}
            >
              <Links
                linkName={item.Name}
                linkRef={item.href}
                index={index}
                key={index}
              />
            </animated.div>
          ))}

        {/*  display menu icon when screen size is less than 600px */}
        {isBurgerNav && (
          <animated.div style={burgerProps}>
            <Button onClick={handleBurgerMenu} variant="outlined">
              <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
            </Button>
          </animated.div>
        )}
      </Grid>
    </Box>
  );
};

export default navBar;
