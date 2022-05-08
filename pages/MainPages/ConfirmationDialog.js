import React from "react";
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Icon from '@mui/material/Icon';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const confirmationDialog = () => {

    // Elements of the page. Grid and Button elements imported from the MUI library
    const btnCancel = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
    const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };

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
                <Card style={{ maxWidth: 600, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Confirm Transfer
                        </Typography>
                            <CardContent align='center'>
                                <Typography>
                                    Are you sure?
                                    <br></br>
                                    <b>NOTE:</b> Your ability to edit this profile will be terminated.
                                </Typography>
                            </CardContent><br></br>
                        <Button color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                        <Button color='primary' variant='contained' style={btnSave} onClick={handleClickOpen}>OK</Button><br></br>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent align="center">
                                <CheckCircleOutlineIcon  color="success" fontSize="large"/>
                                <DialogContentText id="alert-dialog-description">
                                    <br></br>Cattle has been successfully added to the next stage!<br></br>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleConfirm} autoFocus>Exit</Button>
                            </DialogActions>
                        </Dialog>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
export default confirmationDialog; //exporting adminPortal