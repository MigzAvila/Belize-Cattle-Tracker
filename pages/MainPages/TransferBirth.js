import React from "react";
import { Button, Grid, TextField, Card, CardContent, Typography } from '@material-ui/core'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/Link';

function transferBirth() {
    const btnStyle = { margin: '10px 0', height: 40 };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false)
    }

    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                           Cattle Birth Transferral
                        </Typography><br></br>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField label='Cattle ID' placeholder="Cattle ID" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label='Trace Number' placeholder="Trace Number" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label='Slaughter House Location' placeholder="Slaughter House Location" variant="outlined" fullWidth required />
                            </Grid>
                        </Grid><br></br><br></br>
                        <Grid align="center">
                            <Button color='primary' variant='contained' style={btnStyle} onClick={handleClickOpen}>Transfer to Slaughter Stage</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Confirm Transfer"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Would you like to transfer this cattle to the next stage?<br></br>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>No</Button>
                                    <Link href="/MainPages/ConfirmationDialog">
                                        <Button onClick={handleConfirm} autoFocus>Yes</Button>
                                    </Link>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
export default transferBirth;