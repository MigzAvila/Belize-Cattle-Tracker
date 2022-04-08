import React from "react";
import { Button, Grid, TextField, TextareaAutosize} from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const slaughterInfo =()=> {// Initializing slaughterInfo
 // Page styling
	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

	const btnStyle={margin:'10px 0', height: 40}
  const btnSave = {margin: '10px 0', width: '40%', height: 40, backgroundColor: 'green', align: 'right'}; 
  const btnCancel = {margin: '10px 0', marginRight: '20%', width: '40%', height: 40, backgroundColor: 'red', align: 'left'};
  const txtareaStyle={width: '100%', fontSize: '17px'}
	const [value, setValue] = React.useState(null);
	// Page elements. Grid, LocalizationProvider and other elements implemented from MUI library.
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
            <h1>{process.env.REACT_APP_TITLE}</h1>
    <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
				<Grid align = 'center'>
					<h2>Create New Slaughter Info</h2>
				</Grid>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Slaughter Date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params}/>}
                    fullWidth />
				</LocalizationProvider>
                <TextField label='Slaughterhouse Name' placeholder='Slaughterhouse Name' fullWidth required />
                <TextField label='Cattle ID' placeholder='Cattle ID' fullWidth required /><br></br><br></br>
                <TextareaAutosize label='Slaughtering Methods Used' placeholder='Slaughtering Methods Used' style={txtareaStyle}/>
                <TextField label='Factory Destination' placeholder='Factory Destination' fullWidth required />
                <TextField label='Factory Name' placeholder='Factory Name' fullWidth required /><br></br><br></br>
                <FormControl fullWidth>
                  <InputLabel>Life Status</InputLabel>
                  <Select label="Life Status" fullWidth required>
                    <MenuItem value="Alive">Alive</MenuItem>
                    <MenuItem value="Dead">Dead</MenuItem>
                  </Select>
                </FormControl><br></br><br></br>
                <Button  color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                <Button  color='primary' variant='contained' style={btnSave}>SAVE</Button>
		  	</div>
	  	</Grid>
  )
}
export default slaughterInfo;// Export slaughterInfo 