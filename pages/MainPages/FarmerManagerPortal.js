import * as React from "react";
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import FarmerPortalNav from "../components/RoleNavBars/FarmerNavBar";
import { render } from "react-dom";
import Link from "next/link";


const btnStyle = { margin: '15px 0', height: 60, width: 250 }

// Elements of the page. Grid and Button elements imported from the MUI library
class farmerPortal extends React.Component {

	render() {
		return (
			<>
				<FarmerPortalNav />
				<div className="mainMenu" style={{ marginTop: '30px' }}>
					<Grid>
						<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
							<CardContent>
								<Typography gutterBottom variant="h4" align="center">
									Farmer's Portal
								</Typography>
								<Grid container spacing={1} align="center">
									<Grid xs={12}>
										<Button color='primary' variant='contained' style={btnStyle}>
											<Link item xs={2} href='/MainPages/add_cattle_info'>
												Create Cattle Profile 
											</Link>
										</Button>
									</Grid>
									<Grid xs={12}>
										<Button color='primary' variant='contained' style={btnStyle}>
												<Link item xs={2} href='/MainPages/SearchCattle'>
												Search Cattle Profile 
												</Link>
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</div>
			</>
		)
	}
};
export default farmerPortal; //exporting farmerPortal