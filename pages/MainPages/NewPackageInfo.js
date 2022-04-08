import React from "react";
import { Button, Grid, TextField, TextareaAutosize} from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function packageInfo() { // Initializing packageInfo
    // Page styling
    const paperStyle = {
        padding: 20, height: 'auto', width: 350, margin: "20px auto",
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
        borderRadius: "10px",
    };

    const btnStyle = { margin: '10px 0', height: 40};
    const btnSave = {margin: '10px 0', width: '40%', height: 40, backgroundColor: 'green', align: 'right'}; 
    const btnCancel = {margin: '10px 0', marginRight: '20%', width: '40%', height: 40, backgroundColor: 'red', align: 'left'};
    const txtareaStyle = { width: '100%', fontSize: '18px' };
    const [value, setValue] = React.useState(null);
    // Page elements. Grid, TextField, LocalizationProvider and other elements imported from MUI library.
    return (
        <Grid>
            <div elevation={10} style={paperStyle}>
                <h1>{process.env.REACT_APP_TITLE}</h1>
                <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
                <Grid align='center'>
                    <h2>Create New Packaging Info</h2>
                </Grid>
                <TextField label='Factory/Company Name' placeholder='Factory/Company Name' fullWidth required />
                <TextField label='Meat Product Type' placeholder='Meat Product Type' fullWidth required />
                <TextField label='Cattle ID' placeholder='Cattle ID' fullWidth required /><br></br><br></br>
                <TextareaAutosize label='Product Description' placeholder='Product Description' style={txtareaStyle} />
                <TextField label='Product Weight' placeholder='Product Weight' fullWidth required />
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Packaging Date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params}/>}
                    fullWidth />

                    <DatePicker
                        label="Expiry Date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params}/>}
                    fullWidth />
                </LocalizationProvider>
                <TextField label='Cost per Unit' placeholder='Cost per Unit' fullWidth required />
                <TextField label='Batch Number' placeholder='Batch Number' fullWidth required />
                <TextField label='Store Name' placeholder='Store Name' fullWidth required />
                <TextField label='Store Location' placeholder='Store Location' fullWidth required /><br></br><br></br>
                <TextareaAutosize label='Trading Details' placeholder='Trading Details' style={txtareaStyle} /><br></br><br></br>
                <Button color='primary' variant='contained' style={btnStyle} fullWidth>Generate QR Code</Button>
                <Button color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                <Button color='primary' variant='contained' style={btnSave}>SAVE</Button>
            </div>
        </Grid>
    );
}
export default packageInfo; //exporting packageInfo