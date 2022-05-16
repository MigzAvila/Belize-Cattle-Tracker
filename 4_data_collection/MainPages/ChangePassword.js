import * as React from "react";
import { Button, Grid, Card, CardContent, TextField, Typography } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Link from "next/link";
import { useRouter } from 'next/router';

const contStyle = { borderTop: "1px solid", width: '100%', padding: 5, borderLeft: 0, borderRight: 0 }
const btnDiscard = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };

function changePassword() {
    const router = useRouter()

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
        <div className="mainMenu" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                    <IconButton >
                        <ArrowBackIcon onClick={() => router.back()} />
                    </IconButton>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Change Password
                        </Typography><br></br>
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
                        <Button color='primary' variant='contained' style={btnDiscard} onClick={() => router.back()} >Discard</Button>
                        <Button color='primary' variant='contained' style={btnSave} onClick={handleClickOpen} >Save</Button><br></br>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Confirm Password Change"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Would you like to save your new password?<br></br>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Link href={`/MainPages/PasswordSuccess`}>
                                    <Button onClick={handleConfirm} autoFocus>Save</Button>
                                </Link>
                            </DialogActions>
                        </Dialog>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
export default changePassword;

