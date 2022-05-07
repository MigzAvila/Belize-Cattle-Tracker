import React from "react";
import { Button, Grid, Card, CardContent, Typography} from '@material-ui/core'

// Initializing farmerPortal
const adminPortal =()=> {

	const btnStyle = { margin: '15px 0', height: 60, width: 250 }
	// Elements of the page. Grid and Button elements imported from the MUI library
  	return(
		<div className="mainMenu" style={{marginTop: '30px'}}>
			<Grid>
				<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
					<CardContent>
						<Typography gutterBottom variant="h4" align="center">
							BAHA Admin Portal
						</Typography>
						<Grid container spacing={1} align="center">
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle}>Create Cattle Profile</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle}>Search Cattle Profile</Button>
							</Grid>
                            <Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle}>Generate Reports</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</div>
  )
}
export default adminPortal; //exporting adminPortal