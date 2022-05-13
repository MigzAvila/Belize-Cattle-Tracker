import React from "react";
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useRouter} from 'next/router'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "next/link";
import {Roles} from './MainMenu';

const confirmationDialog = () => {
    const router = useRouter()

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
        <div className="mainMenu" style={{ marginTop: '30px' }} align={"center"}>
            <Grid>
                <Card style={{ maxWidth: 600, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset"}}>
                    <CardContent>
                        <Grid>
                        <CheckCircleOutlineIcon  color="success" fontSize="large"/>
                        </Grid>
                        <Grid>
                        <Typography id="alert-dialog-description">
                                    <br></br>Record has been created successfully!<br></br>
                                </Typography><br></br>
                                <Button onClick={() => router.back()} autoFocus>Exit</Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
export default confirmationDialog; //exporting adminPortal