import * as React from "react";
import { Button, Grid, Card, CardContent, TextField, Typography } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const contStyle = { borderTop: "1px solid", width: '100%', padding: 5, borderLeft: 0, borderRight: 0 }
const btnDiscard = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };

function changePassword() {
    return (
        <div className="mainMenu" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Change Password
                        </Typography><br></br>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <TextField type='password' label='Old Password' placeholder="Old Password" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type='password' label='New Password' placeholder="New Password" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type='password' label='Confirm Password' placeholder="Confirm Password" variant="outlined" fullWidth required />
                                </Grid>
                            </Grid><br></br><br></br>
                            <Button color='primary' variant='contained' style={btnDiscard}>Discard</Button>
                            <Button type="submit" color='primary' variant='contained' style={btnSave}>Save</Button><br></br>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
export default changePassword;

