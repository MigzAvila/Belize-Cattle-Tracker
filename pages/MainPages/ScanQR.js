import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import App from '../App';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardMedia from '@mui/material/CardMedia';

const ScanQR = () => {
  return (
    <div className="createInfo" style={{ marginTop: '30px' }}>
      <Grid>
        <Card style={{ maxWidth: 960, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Grid align="center">
          <Grid>
              <Typography gutterBottom variant="h4" align="center">Scan QR</Typography>
              <React.StrictMode>
                <App text=
                  "antbio_type: tetracycline. birth_date: 01/12/2020 breed: Hereford cattle_id : 340 cattle_weight : 134lbs dna_type: Roman Briton, welsh combination farmer: Bob Smith gender: male location: Spanish Lookout rearing_type: free roaming repro_stat: none und_hlth_issues: bovine mastitis"
                />
              </React.StrictMode>
            </Grid>
            <Grid marginTop={"55px"}> 
              <CardMedia
                component="img"
                height="auto"
                width="100%"
                image="../images/label.jpg"
                alt="label"
                position="relative"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>

  )
}

export default ScanQR;
