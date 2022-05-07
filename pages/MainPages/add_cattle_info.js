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


function createInfo() {

    const [newCattleInfo, setNewCattleInfo] = useState({
        newCattleID: "",
        newCattleAntbio: "",
        newCattleBreed: "",
        newCattleGender: "",
        newCattleWeight: "",
        newCattleDna: "",
        newCattleTag: "",
        newCattleFarmer: "",
        newCattleLocation: "",
        newCattleHissue: "",
        newCattleReartype: "",
        newCattleReproStat: "",

    });

    const apiService = require("../components/APIcalls/APIService");
    const [cattleInfo, setcattleInfo] = useState([]);
    const cattleInfoCollection = collection(db, "cattle_info");

    const createCattle = async () => {
        let status = await apiService.addNewCattle(newCattleInfo);
        console.log(status);
        if (status) {
            await addDoc(cattleInfoCollection, {
                cattle_id: newCattleInfo.newCattleID, antbio_type: newCattleInfo.newCattleAntbio, breed: newCattleInfo.newCattleBreed,
                gender: newCattleInfo.newCattleGender, cattle_weight: newCattleInfo.newCattleWeight, dna_type: newCattleInfo.newCattleDna, eartag_code: newCattleInfo.newCattleTag,
                farmer: newCattleInfo.newCattleFarmer, location: newCattleInfo.newCattleLocation, und_hlth_issues: newCattleInfo.newCattleHissue,
                rearing_type: newCattleInfo.newCattleReartype, repro_stat: newCattleInfo.newCattleReproStat
            })
        }
    };

    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() => {

        const getCattleInfo = async () => {
            const data = await getDocs(cattleInfoCollection);
            setcattleInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getCattleInfo();
    }, [])

    const btnCancel = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
    const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };


    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center">
                            Create Cattle Profile
                        </Typography><br></br>
                        <form>

                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Cattle ID' placeholder="Cattle ID" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleID: e.target.value })} value={newCattleInfo.newCattleID} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Antibio' placeholder="Antibio" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleAntbio: e.target.value })} value={newCattleInfo.newCattleAntbio} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Breed' placeholder="Breed" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleBreed: e.target.value })} value={newCattleInfo.newCattleBreed} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Gender' placeholder="Gender" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleGender: e.target.value })} value={newCattleInfo.newCattleGender} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Weight' placeholder="Weight" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleWeight: e.target.value })} value={newCattleInfo.newCattleWeight} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='DNA' placeholder="DNA" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleDna: e.target.value })} value={newCattleInfo.newCattleDna} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Tag' placeholder="Tag" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleTag: e.target.value })} value={newCattleInfo.newCattleTag} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Farmer' placeholder="Farmer" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleFarmer: e.target.value })} value={newCattleInfo.newCattleFarmer} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Location' placeholder="Location" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleLocation: e.target.value })} value={newCattleInfo.newCattleLocation} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Health Issue' placeholder="Health Issue" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleHissue: e.target.value })} value={newCattleInfo.newCattleHissue} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Rearing Type' placeholder="Rearing Type" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleReartype: e.target.value })} value={newCattleInfo.newCattleReartype} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label='Reproduction Status' placeholder="Reproduction Status" variant="outlined" fullWidth required onChange={(e) => setNewCattleInfo({ ...newCattleInfo, newCattleReproStat: e.target.value })} value={newCattleInfo.newCattleReproStat} />
                                </Grid><br></br><br></br><br></br><br></br><br></br>
                                <Button color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                                <Button type="submit" color='primary' variant='contained' style={btnSave} onClick={createCattle}>Add Cattle Info</Button><br></br><br></br><br></br>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            {cattleInfo.map((cattle, index) => {
                return (

                    <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto" }}>
                        <CardContent>
                            <TableContainer>
                                <Table key={index} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Cattle ID</TableCell>
                                            <TableCell align="right">Antibio</TableCell>
                                            <TableCell align="right">Breed</TableCell>
                                            <TableCell align="right">Gender</TableCell>
                                            <TableCell align="right">Weight</TableCell>
                                            <TableCell align="right">DNA</TableCell>
                                            <TableCell align="right">Tag</TableCell>
                                            <TableCell align="right">Farmer</TableCell>
                                            <TableCell align="right">Location</TableCell>
                                            <TableCell align="right">Health Issues</TableCell>
                                            <TableCell align="right">Rearing Type</TableCell>
                                            <TableCell align="right">Reproduction Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{cattle.cattle_id}</TableCell>
                                            <TableCell align="right">{cattle.antbio_type}</TableCell>
                                            <TableCell align="right">{cattle.breed}</TableCell>
                                            <TableCell align="right">{cattle.gender}</TableCell>
                                            <TableCell align="right">{cattle.cattle_weight}</TableCell>
                                            <TableCell align="right">{cattle.dna_type}</TableCell>
                                            <TableCell align="right">{cattle.eartag_code}</TableCell>
                                            <TableCell align="right">{cattle.farmer}</TableCell>
                                            <TableCell align="right">{cattle.location}</TableCell>
                                            <TableCell align="right">{cattle.und_hlth_issues}</TableCell>
                                            <TableCell align="right">{cattle.rearing_type}</TableCell>
                                            <TableCell align="right">{cattle.repro_stat}</TableCell>
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

export default createInfo;