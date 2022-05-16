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
    { field: 'costPerUnit', headerName: 'Cost Per Unit ($)', type: 'number', width: 150 },
    { field: 'factName', headerName: 'Factory Name', width: 150 },
    { field: 'factDest', headerName: 'Factory Destination', width: 200 },
    { field: 'meatProdType', headerName: 'Meat Type', width: 150 },
    { field: 'expDate', headerName: 'Expiry Date', width: 150 },
    { field: 'pckgDate', headerName: 'Package Date', width: 150 },
    { field: 'prodDesc', headerName: 'Product Description', width: 250 },
    { field: 'prodWeight', headerName: 'Product Weight (lbs)', type: 'number', width: 150 },
    { field: 'strName', headerName: 'Store Name', width: 150 },
    { field: 'strLoc', headerName: 'Store Location', width: 200 },
    { field: 'traceNum', headerName: 'Trace Number', type: 'number', width: 150 },
    { field: 'tradeDetails', headerName: 'Trade Details', width: 150 },
];

const rows = [
        { id: 36, batchNum: 123, costPerUnit: 12.31, factName: "Running W", factDest: "San Ignacio, Cayo", meatProdType: "Ribs", expDate: "April 30, 2022", pckgDate: "March 1, 2022", prodDesc: "10% Lean", prodWeight: "12lbs", strName: "Luckys", strLoc: "Belmopan", traceNum: "36", tradeDetails: "Cash"},
        { id: 35, batchNum: 123, costPerUnit: 12.25, factName: "Running W", factDest: "San Ignacio, Cayo", meatProdType: "Ribs", expDate: "April 30, 2022", pckgDate: "March 1, 2022", prodDesc: "10% Lean", prodWeight: "12lbs", strName: "Luckys", strLoc: "Belmopan", traceNum: "35", tradeDetails: "Cash"},
        { id: 111, batchNum: 80, costPerUnit: 18.90, factName: "Running W", factDest: "San Ignacio, Cayo", meatProdType: "Legs", expDate: "December 25, 2022", pckgDate: "May 25, 2022", prodDesc: "7% Lean", prodWeight: "20lbs", strName: "123Mart", strLoc: "San Ignacio", traceNum: "111", tradeDetails: "Credit"},
        { id: 9, batchNum: 80, costPerUnit: 18.90, factName: "Running W", factDest: "San Ignacio, Cayo", meatProdType: "Legs", expDate: "December 25, 2022", pckgDate: "May 25, 2022", prodDesc: "7% Lean", prodWeight: "20lbs", strName: "123Mart", strLoc: "San Ignacio", traceNum: "9", tradeDetails: "Credit"}
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
                    Product/Packaging Information Reports
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