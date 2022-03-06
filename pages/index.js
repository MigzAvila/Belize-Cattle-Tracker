import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkGn9g3w4nRvqFZjEUIAXLpfoWzmr6VTA",
  authDomain: "belize-cattle-tracker.firebaseapp.com",
  projectId: "belize-cattle-tracker",
  storageBucket: "belize-cattle-tracker.appspot.com",
  messagingSenderId: "1000473041553",
  appId: "1:1000473041553:web:6abf6c70b8f0583a43bd30",
  measurementId: "G-N39WEHKHKQ"
};

const app = initializeApp(firebaseConfig);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  background: "transparent",
}));

export default function Home() {
  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ paddingTop: "30px" }}
    >
      <Grid item xs={10}>
        <Item sx={{ fontSize: "30px", fontWeight: "bold" }}>Home Page</Item>
        <Item sx={{ fontSize: "15px" }}>This is the body</Item>
      </Grid>
      {console.log(app)}
    </Grid>
    
  );
}
