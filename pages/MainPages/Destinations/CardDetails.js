import React, { useState } from "react";
import ResortTab from "./ResortTabData"
import { ResortCard } from "./Card"
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const CardDetails = () => {
  const [spacing, setSpacing] = useState(2);

  return (
    <Grid sx={{ flexGrow: 1, margin:"0 auto", textAlign: "center", pb:6, pb:5 }} container spacing={0}>
      <Grid item xs={12} >
        <Grid container justifyContent="center" spacing={spacing}>     
            <Grid item >
              <Paper >
                  <h1>{ResortCard.resortDistrict} </h1>
                  <h2>{ResortCard.resortName}</h2>
              </Paper> <br/>
              <Paper sx={{boxShadow: "none"}}>
                  <ResortTab />
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CardDetails