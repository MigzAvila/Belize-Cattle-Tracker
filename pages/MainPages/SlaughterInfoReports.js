import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Typography, Grid } from '@material-ui/core'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import { useRouter } from 'next/router'

const columns = [
    { field: 'id', headerName: 'Cattle ID', type: 'number', width: 100 },
    { field: 'batchNum', headerName: 'Batch Number', type: 'number', width: 150 },
    { field: 'factName', headerName: 'Factory Name', width: 150 },
    { field: 'factDest', headerName: 'Factory Destination', width: 200 },
    { field: 'slaughterDate', headerName: 'Slaughter Date', width: 150 },
    { field: 'slaughterMthd', headerName: 'Slaughter Method', width: 200 },
    { field: 'traceNum', headerName: 'Trace Number', type: 'number', width: 150 }
];

const rows = [
    { id: 1, batchNum: 345, factName: 'Running W', factDest: 'Spanish Lookout, Cayo' },
];

export default function DataTable() {
    const router = useRouter()
    const printPage = () => {
        window.print();

    }
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Card style={{ maxWidth: 1050, height: "auto", padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                <IconButton>
                    <ArrowBackIcon onClick={() => router.back()} />
                </IconButton>
                <Typography gutterBottom variant="h4" align="center">
                    Slaughter Information Reports
                </Typography>
                <DataGrid
                    style={{ maxWidth: 1050, height: 600, padding: "20px 5px", margin: "0 auto", border: "none", paddingTop: 0, paddingBottom: 0 }}
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

        </div >
    );
}