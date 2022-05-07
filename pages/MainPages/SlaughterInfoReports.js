import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Typography } from '@material-ui/core'

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
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Card style={{ maxWidth: 1050, height: "auto", padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                <Typography gutterBottom variant="h4" align="center">
                    Slaughter Information Reports
                </Typography>
                <DataGrid
                    style={{ maxWidth: 1050, height: 600, padding: "20px 5px", margin: "0 auto", border: "none", paddingTop: 0 }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Card>

        </div>
    );
}