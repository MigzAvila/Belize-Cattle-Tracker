import React from "react";
import { Button, Grid, TextField, TextareaAutosize} from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const cattleProfile =()=> { // Initializing cattle Profile
//Page styling code
	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

  const btnSave = {margin: '10px 0', width: '40%', height: 40, backgroundColor: 'green', align: 'right', fontSize: '13px'}; 
  const btnCancel = {margin: '10px 0', marginRight: '20%', width: '40%', height: 40, backgroundColor: 'red', align: 'left', fontSize: '13px'};
  const txtareaStyle={width: '100%', fontSize: '18px'}
	// Elements of the page. Grid, Button, TextField, and other elements imported from the MUI library
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
				<Grid align = 'center'>
					<h2>Create New Cattle Profile</h2>
				</Grid>
                <TextField label='Birth Date' placeholder='Birth Date' fullWidth required />
                <TextField label='Gender' placeholder='Gender' fullWidth required />
                <TextField label='Cattle ID' placeholder='Cattle ID' fullWidth required /><br></br><br></br>
                <TextareaAutosize label='Underlying Health Issues' placeholder='Underlying Health Issues' style={txtareaStyle}/>
                <TextField label='Weight' placeholder='Weight' fullWidth required />
                <TextField label='Location' placeholder='Location' fullWidth required />
                <TextField label='Breed' placeholder='Breed' fullWidth required />
                <TextField label='Rearing Type' placeholder='Rearing Type' fullWidth required />
                <TextField label='Type of Antibiotics Used' placeholder='Type of Antibiotics Used' fullWidth required />
                <TextField label='Reproduction Status' placeholder='Reproduction Status' fullWidth required />
                <TextField label='DNA Type' placeholder='DNA Type' fullWidth required /><br></br><br></br>
                <FormControl fullWidth>
                  <InputLabel>Life Status</InputLabel>
                  <Select label="Life Status" fullWidth required>
                    <MenuItem value="Alive">Alive</MenuItem>
                    <MenuItem value="Dead">Dead</MenuItem>
                  </Select>
                </FormControl><br></br><br></br>
                <Button  color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                <Button  color='primary' variant='contained' style={btnSave}>Add Profile</Button>
		  	</div>
	  	</Grid>
  )
}
export default cattleProfile;// Exporting cattleProfile 