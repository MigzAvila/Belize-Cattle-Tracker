import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Button, Grid, TextField, Card, CardContent, Typography } from '@material-ui/core'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createSlgthrInfo() {

    const [newSlgthrInfo, setNewSlgthrInfo] = useState({
        newCattleID: 0,
        newFctryDest: "",
        newFctryName: "",
        newSlghtrDate: "",
        newSlgthrMtd: "",
        newTraceNum: ""

    });

    const apiService = require("../components/APIcalls/APIService");
    const [slgthrInfo, setslghtrInfo] = useState([]);
    const slgthrInfoCollection = collection(db, "slaughter_info");

    const createSlghtr = async () => {
        let status = await apiService.addNewSlaughter(newSlgthrInfo);
        console.log(status);
        if (status) {
            await addDoc(slgthrInfoCollection, { cattle_id: newSlgthrInfo.newCattleID, fctry_dest: newSlgthrInfo.newFctryDest, fctry_name: newSlgthrInfo.newFctryName, slgthr_date: newSlgthrInfo.newSlghtrDate, slgthr_mtd: newSlgthrInfo.newSlgthrMtd, trace_num: newSlgthrInfo.newTraceNum })
        }
    };

    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() => {

        const getSlgthrInfo = async () => {
            const data = await getDocs(slgthrInfoCollection);
            setslghtrInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSlgthrInfo();
    }, [])

    const btnCancel = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
    const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };

    return (
        <div className="createSlgthrInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Create Slaughter Info
                        </Typography><br></br>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Cattle ID' placeholder="Cattle ID" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newCattleID: e.target.value })} value={newSlgthrInfo.newCattleID} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Trace Number' placeholder="Trace Number" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newTraceNum: e.target.value })} value={newSlgthrInfo.newTraceNum} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Factory Name' placeholder="Factory Name" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newFctryName: e.target.value })} value={newSlgthrInfo.newFctryName} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Factory Destination' placeholder="Factory Destination" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newFctryDest: e.target.value })} value={newSlgthrInfo.newFctryDest} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Slaughter Method' placeholder="Slaughter Method" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newSlgthrMtd: e.target.value })} value={newSlgthrInfo.newSlgthrMtd} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Slaughter Date' placeholder="Slaughter Date" variant="outlined" fullWidth required onChange={(e) => setNewSlgthrInfo({ ...newSlgthrInfo, newSlghtrDate: e.target.value })} value={newSlgthrInfo.newSlghtrDate} />
                                </Grid><br></br><br></br><br></br><br></br><br></br>
                                <Button color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                                <Button type="submit" color='primary' variant='contained' style={btnSave} onClick={createSlghtr}> Add Slaughter Info</Button><br></br><br></br><br></br>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

            {slgthrInfo.map((slgthr, index) => {
                return (

                    <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto" }}>
                        <CardContent>
                            <TableContainer>
                                <Table key={index} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Cattle ID</TableCell>
                                            <TableCell align="right">Batch Number</TableCell>
                                            <TableCell align="right">Factory Destination</TableCell>
                                            <TableCell align="right">Factory Name</TableCell>
                                            <TableCell align="right">Slaughter Date</TableCell>
                                            <TableCell align="right">Slaughter Method</TableCell>
                                            <TableCell align="right">Trace Number</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{slgthr.cattle_id}</TableCell>
                                            <TableCell align="right">{slgthr.cattle_id}</TableCell>
                                            <TableCell align="right">{slgthr.fctry_dest}</TableCell>
                                            <TableCell align="right">{slgthr.fctry_name}</TableCell>
                                            <TableCell align="right">{slgthr.slgthr_date}</TableCell>
                                            <TableCell align="right">{slgthr.slgthr_mtd}</TableCell>
                                            <TableCell align="right">{slgthr.trace_num}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );

}

export default createSlgthrInfo;