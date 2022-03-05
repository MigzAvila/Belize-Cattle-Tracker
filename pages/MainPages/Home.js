import React from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "../components/Carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Home = () => {
  const backgrou = {
    imgPath:
      "https://a.cdn-hotels.com/gdcs/production193/d660/4e1723eb-4760-451f-a0ea-a6ad5af4353d.jpg",
    label: "Bird",
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
      <Box
        sx={{
          width: "auto",
          height: "auto",
          paddingTop: "50px",
          backgroundImage: `url(https://www.naiaresidences.com/wp-content/uploads/2019/10/Naia-resort-and-spa.jpg) `,
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
        >
          <Grid item xs={12}>
            <animated.div style={props}>
              <h1>I will fade in</h1>
              <h1>Home</h1>
              {/* <Carousel /> */}
            </animated.div>
          </Grid>
          <Grid item xs={12}>
            <animated.div style={props}>
              <h1>I will fade in</h1>
              <h1>Home</h1>
              {/* <Carousel /> */}
            </animated.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
