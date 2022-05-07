import React from "react";
import { Grid } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Initializing Main Portal
const cattleProfile = () => {

    // Page elements. Grid, Card, CardActionArea and other elements imported from MUI library
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Cattle Profile
                        </Typography>
                        <CardActionArea backgroundColor="unset">
                            <CardMedia
                                component="img"
                                height="300"
                                width="80"
                                image="../images/cattle.png"
                                alt="cattle"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cattle ID: 40453
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Farmer: Bob Ross
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}
export default cattleProfile; // Exporting mainPortal