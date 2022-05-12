import React from "react";
import { Grid } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import { useRouter } from 'next/router'
import { Roles } from './MainMenu';

//Initializing Main Portal
const cattleProfile = () => {
  const router = useRouter()
    
    // Page elements. Grid, Card, CardActionArea and other elements imported from MUI library
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                        <IconButton>
                            <ArrowBackIcon onClick={() => router.back()} />
                        </IconButton>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Cattle Profile
                        </Typography>
                        <Link href={`/MainPages/C${Roles}Details`}>
                             <CardActionArea backgroundColor="unset">
                                <CardMedia
                                    component="img"
                                    height="300"
                                    width="80"
                                    image="../images/cattle.png"
                                    alt="cattle"
                                />
                                <CardContent style={{padding: "20px"}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Cattle ID: 40453
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Farmer: Bob Ross
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                        </Link>
{/* 
                        { Roles === "Slaughter"?
                         (<Link href="/MainPages/CSlaughterDetails">
                             <CardActionArea backgroundColor="unset">
                            <CardMedia
                                component="img"
                                height="300"
                                width="80"
                                image="../images/cattle.png"
                                alt="cattle"
                            />
                            <CardContent style={{padding: "20px"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cattle ID: 40453
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Farmer: Bob Ross
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>): <></>}

                        { Roles === "Packaging"?
                         (<Link href="/MainPages/CProductDetails">
                             <CardActionArea backgroundColor="unset">
                            <CardMedia
                                component="img"
                                height="300"
                                width="80"
                                image="../images/cattle.png"
                                alt="cattle"
                            />
                            <CardContent style={{padding: "20px"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cattle ID: 40453
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Farmer: Bob Ross
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>): <></>} */}
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}
export default cattleProfile; // Exporting mainPortal