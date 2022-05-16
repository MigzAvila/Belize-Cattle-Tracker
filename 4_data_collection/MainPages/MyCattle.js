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

//Initializing Main Portal
const myCattle = () => {
  const router = useRouter()

    // Page elements. Grid, Card, CardActionArea and other elements imported from MUI library
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>                    
                     <Link href="/MainPages/FarmerPortal">
                        <IconButton>
                            <ArrowBackIcon onClick={() => router.back()}/>
                        </IconButton>
                     </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h4" align="center">
                                My Cattle
                            </Typography>
                            <CardActionArea backgroundColor="unset">
                                    <Link href="/MainPages/CattleProfile">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cattle ID: 40453
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Farmer: Bob Ross
                                        </Typography>
                                    </CardContent>
                                    </Link>
                            </CardActionArea>
                        </CardContent>
                </Card>
            </Grid>
        </div>

    )
}
export default myCattle; // Exporting myCattle