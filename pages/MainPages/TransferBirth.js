import React from "react";
import { Button, Grid, TextField, Card, CardContent, Typography } from '@material-ui/core'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/Link';
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, updateDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';

function transferBirth() {
    const btnStyle = { margin: '10px 0', height: 40 };

    const [open, setOpen] = React.useState(false);
    const [role, setRole] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false)
    }

    const [cattleInfo, setcattleInfo] = useState([]);

    const cattleInfoCollection = collection(db, "cattle_info");
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() => {

        const getCattleInfo = async () => {
            const data = await getDocs(cattleInfoCollection);
            setcattleInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        let data = window.localStorage.getItem("Role")
        setRole(data)

        getCattleInfo();

    }, [])

    const getCattleInfoById = (cattleID) => {
        const data = cattleInfo.filter((cattle) => cattle.cattle_id === cattleID);
        console.log(data)
    }  //end of getCattleInfo  

    const update = () => {
        console.log(cattleInfo[0])
        // cattleInfo[0].gender = "male"
        // console.log(cattleInfo[0])
        let arr = cattleInfo[0].trans_stat.filter(e => e !== role); 
        switch(role) {
        case "Farmer":
           if (!arr.includes("Slaughter")){
                 arr.push("Slaughter")
           }
          
            break;
        case "Slaughter":
             if (!arr.includes("Product")){
                  arr.push("Product")
           }
            
            break;
        case "Product":
            if (!arr.includes("Admin")){
                  arr.push("Admin")
           }
            break;
        default:
            break
        }
        cattleInfo[0].trans_stat = arr
        console.log(cattleInfo[0])


        // [START firestore_data_set_field]
        const washingtonRef = doc(db, "cattle_info", cattleInfo[0].cattle_id);

            // Set the "capital" field of the city 'DC'
            updateDoc(washingtonRef, {
                trans_stat: cattleInfo[0].trans_stat
            }).then(() => {
                alert('Updated Cattle successfully');
        }).catch((err) => {
            alert("Failed", err)});
    }

    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>

            {cattleInfo.map((cattle, index) => {
                console.log(typeof (cattle.cattle_id), index, "AKI", cattle.trans_stat)
            })}
            <Grid>
                <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Cattle Birth Transferral
                        </Typography><br></br>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField label='Cattle ID' placeholder="Cattle ID" variant="outlined" fullWidth required onChange={e => getCattleInfoById(e.target.value)} />
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