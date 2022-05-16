import React from "react";
import { Button, Grid, Card, CardContent, Typography} from '@material-ui/core'
import Link from 'next/Link'

// Initializing farmerPortal
const adminReportsPortal =()=> {

	const btnStyle = { margin: '15px 0', height: 60 }
	// Elements of the page. Grid and Button elements imported from the MUI library
  	return(
		<div className="mainMenu" style={{marginTop: '30px'}}>
			<Grid>
				<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
					<CardContent>
						<Typography gutterBottom variant="h4" align="center">
							BAHA Admin Reports Portal
						</Typography>
						<Grid container spacing={1} align="center">
							<Grid xs={12}>
								<Link href="/MainPages/BirthInfoReports">
									<Button color='primary' variant='contained' style={btnStyle} fullWidth required>Generate Birth Info Reports</Button>
								</Link>
							</Grid>
							<Grid xs={12}>
								<Link href="/MainPages/SlaughterInfoReports">
									<Button color='primary' variant='contained' style={btnStyle} fullWidth required>Generate Slaughter Info Reports</Button>
								</Link>
							</Grid>
                            <Grid xs={12}>
								<Link href="/MainPages/ProductInfoReports">
									<Button color='primary' variant='contained' style={btnStyle} fullWidth required>Generate Product/Packaging Info Reports</Button>
								</Link>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</div>
  )
}
export default adminReportsPortal; //exporting adminPortal