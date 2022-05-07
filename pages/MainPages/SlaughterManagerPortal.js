import * as React from "react";
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import PortalNav from "../components/RoleNavBars/PortalNavBar";
import { render } from "react-dom";

const btnStyle = { margin: '15px 0', height: 60, width: 250 }

// Elements of the page. Grid and Button elements imported from the MUI library
class slaughterManagerPortal extends React.Component {

	render() {
		return (
			<>
				<PortalNav />
				<div className="mainMenu" style={{ marginTop: '30px' }}>
					<Grid>
						<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
							<CardContent>
								<Typography gutterBottom variant="h4" align="center">
									Slaughter Manager Portal
								</Typography>
								<Grid container spacing={1} align="center">
									<Grid xs={12}>
										<Button color='primary' variant='contained' style={btnStyle}>Search Cattle Profile</Button>
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
export default slaughterManagerPortal; //exporting farmerPortal