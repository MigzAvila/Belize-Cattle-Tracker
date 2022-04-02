import React from "react";
import { Button, Grid} from '@material-ui/core'

const mainPortal =()=> {

	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

	const btnStyle={margin:'15px 0', height: 60}
	const imageStyle={borderRadius: '50%'}
	
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
            <h1>{process.env.REACT_APP_TITLE}</h1>
    <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
				<Grid align = 'center'>
					<h2>Belize Cattle Tracker Portal</h2>
				</Grid>
				<Button  color='primary' variant='contained' style={btnStyle} fullWidth>Birth Stage Info: Farmer/BAHA</Button>
                <Button  color='primary' variant='contained' style={btnStyle} fullWidth>Slaughter Stage: Slaughterhouse Manager</Button>
                <Button  color='primary' variant='contained' style={btnStyle} fullWidth>Processing/Packaging Stage: Production/Packaging Manager</Button>
                <Button  color='primary' variant='contained' style={btnStyle} fullWidth>ADMIN: BAHA</Button>
		  	</div>
	  	</Grid>
  )
}
export default mainPortal;