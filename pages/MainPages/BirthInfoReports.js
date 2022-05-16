import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Typography, Grid } from '@material-ui/core'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import { useRouter } from 'next/router'

const columns = [
    { field: 'id', headerName: 'Cattle ID', type: 'number', width: 100 },
    { field: 'farmer', headerName: 'Farmer', width: 150 },
    { field: 'breed', headerName: 'Breed', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'weight', headerName: 'Weight (lbs)', type: 'number', width: 100 },
    { field: 'antibio', headerName: 'Antibiotics', width: 150 },
    { field: 'dna', headerName: 'DNA', width: 100 },
    { field: 'tag', headerName: 'Tag', type: 'number', width: 100 },
    { field: 'location', headerName: 'Location', width: 220 },
    { field: 'hIssues', headerName: 'Health Issues', width: 220 },
    { field: 'rearType', headerName: 'Rearing Type', width: 150 },
    { field: 'reproStatus', headerName: 'Reproduction Status', width: 150 },
];

const rows = [
        { id: 1, farmer: "Bob Ross", breed: "Hereford", gender: "Male", weight: "400lbs", antibio: "medicine", dna: "Hereford", tag: "12233", location: "Spanish Lookout", hIssues: "None", rearType: "Free Roaming", reproStatus: "None" },
        { id: 2, farmer: "Bob Ross", breed: "Hereford", gender: "Female", weight: "300lbs", antibio: "medicine", dna: "Hereford", tag: "12344", location: "Spanish Lookout", hIssues: "None", rearType: "Free Roaming", reproStatus: "None" },
        { id: 3, farmer: "Bob Ross", breed: "Hereford", gender: "Male", weight: "654lbs", antibio: "medicine", dna: "Hereford", tag: "2345", location: "Spanish Lookout", hIssues: "None", rearType: "Free Roaming", reproStatus: "None" },
        { id: 4, farmer: "Bob Ross", breed: "Hereford", gender: "Female", weight: "651lbs", antibio: "penicillin", dna: "Hereford", tag: "244", location: "Spanish Lookout", hIssues: "None", rearType: "Free Roaming", reproStatus: "None" },
        { id: 5, farmer: "Bob Ross", breed: "Hereford", gender: "Female", weight: "300lbs", antibio: "medicine", dna: "Hereford", tag: "1234", location: "Spanish Lookout", hIssues: "None", rearType: "Free Roaming", reproStatus: "None" }
        
    ];


export default function DataTable() {
    const router = useRouter()
    const printPage = () => {
        window.print();

    }
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Card style={{ maxWidth: 1480, height: "auto", padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                <IconButton>
                    <ArrowBackIcon onClick={() => router.back()} />
                </IconButton>
                <Typography gutterBottom variant="h4" align="center">
                    Birth Information Reports
                </Typography>
                <DataGrid
                    style={{ maxWidth: 1480, height: 600, padding: "20px 5px", margin: "0 auto", border: "none", paddingTop: 0, paddingBottom: 0 }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
                <Grid align="right">
                    <IconButton fontSize="large">
                        <PrintIcon onClick={printPage} />
                    </IconButton>
                </Grid>
            </Card>

        </div>
    );
}