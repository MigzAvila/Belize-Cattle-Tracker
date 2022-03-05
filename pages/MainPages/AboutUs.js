import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  background: "transparent",
}));

const About = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingTop: "30px" }}
      >
        <Grid item xs={10}>
          <Item sx={{ fontSize: "30px", fontWeight: "bold" }}>About Us</Item>
          <Item sx={{ fontSize: "15px" }}>
            If you have any question, you can contact Us lorem aslfjsalkdfhskldf
            lksfjslkf sldfh sdajfhsa flkasf hsdkjf
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
