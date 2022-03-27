import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm/index";

const Home = () => {
  
  const [isAuth, setIsAuth] = useState(false);

    const authorize = () => {
    setIsAuth(true);
  };



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <>
     {isAuth ? ( <Box
        sx={{
          width: "auto",
          height: "auto",
          paddingTop: "50px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "50px",
        }}
      >
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "30px" }}
        >
          <Grid item xs={10}>
            <Item sx={{ fontSize: "30px", fontWeight: "bold" }}>
              GET IN TOUCH
            </Item>
            <Item sx={{ fontSize: "15px" }}>This is admin side</Item>
          </Grid>
        </Grid>
      </Box>): <LoginForm isAuth={isAuth} authorize={authorize}/>}
    </>
  );
};

export default Home;
