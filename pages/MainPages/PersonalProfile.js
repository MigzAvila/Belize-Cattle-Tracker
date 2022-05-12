import * as React from "react";
import { Button, Grid, Card, CardContent, Typography, TextField } from '@material-ui/core'
import PortalNav from "../components/RoleNavBars/PortalNavBar";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'


const contStyle = { borderTop: "1px solid", width: '100%', padding: 5, borderLeft: 0, borderRight: 0 }

const personalProfile = () => {
     const router = useRouter()
        return (
            <>
                <PortalNav />
                <div className="mainMenu" style={{ marginTop: '30px' }}>
                    <Grid>
                        <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                            <IconButton>
                                <ArrowBackIcon onClick={() => router.back()}/>
                            </IconButton>
                            <CardContent>
                                <Typography gutterBottom variant="h4" align="center">
                                    Personal Profile
                                </Typography>
                                <Grid container spacing={1}>
                                    <CardContent style={contStyle}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Name:
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Joanne Yong
                                        </Typography>
                                    </CardContent>
                                    <CardContent style={contStyle}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Role Code:
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            FRM10
                                        </Typography>
                                    </CardContent>
                                    <CardContent style={contStyle}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Email:
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            jyoung@gmail.com
                                        </Typography>
                                    </CardContent>
                                    <CardContent style={contStyle} align="center">
                                        <br></br>
                                        <CardContent>
                                            <Button color="primary" variant='contained'>
                                                Change Password
                                            </Button>
                                        </CardContent>
                                    </CardContent>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </div>
            </>
        )
};
export default personalProfile; //exporting adminPortal