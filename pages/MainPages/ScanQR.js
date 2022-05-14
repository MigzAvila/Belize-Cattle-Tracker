import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ReactDOM from 'react-dom';
import App from '../App';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  background: "transparent",
}));

const ScanQR = () => {
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
          <Item sx={{ fontSize: "30px", fontWeight: "bold" }}>Scan QR</Item>
          <Item sx={{ fontSize: "15px" }}>Scanning page</Item>
          </Grid>
          
  <React.StrictMode>
    <App text = 
    "antbio_type: tetracycline. birth_date: 01/12/2020 breed: Hereford cattle_id : 340 cattle_weight : 134lbs dna_type: Roman Briton, welsh combination farmer: Bob Smith gender: male location: Spanish Lookout rearing_type: free roaming repro_stat: none und_hlth_issues: bovine mastitis"
    />
  </React.StrictMode>

        </Grid>

      


    </>
    
  );
};

export default ScanQR;
