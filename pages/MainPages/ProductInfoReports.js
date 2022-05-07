import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Typography } from '@material-ui/core'

const columns = [
    { field: 'id', headerName: 'Cattle ID', type: 'number', width: 100 },
    { field: 'batchNum', headerName: 'Batch Number', type: 'number', width: 150 },
    { field: 'costPerUnit', headerName: 'Cost Per Unit ($)', type: 'number', width: 150 },
    { field: 'factName', headerName: 'Factory Name', width: 150 },
    { field: 'factDest', headerName: 'Factory Destination', width: 200 },
    { field: 'meatProdType', headerName: 'Meat Type', width: 150 },
    { field: 'expDate', headerName: 'Expiry Date', width: 150 },
    { field: 'pckgDate', headerName: 'Package Date', width: 150},
    { field: 'prodDesc', headerName: 'Product Description', width: 250 },
    { field: 'prodWeight', headerName: 'Product Weight (lbs)', type: 'number', width: 150 },
    { field: 'strName', headerName: 'Store Name', width: 150 },
    { field: 'strLoc', headerName: 'Store Location', width: 200 },
    { field: 'traceNum', headerName: 'Trace Number', type: 'number', width: 150 },
    { field: 'tradeDetails', headerName: 'Trade Details', width: 150 },
];

const rows = [
    { id: 1, batchNum: 678, costPerUnit: 250, factName: "Running W", factDest: "San Ignacio, Cayo" }
];

export default function DataTable() {
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Card style={{ maxWidth: 1050, height: "auto", padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                <Typography gutterBottom variant="h4" align="center">
                    Product/Packaging Information Reports
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