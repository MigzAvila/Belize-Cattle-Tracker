import * as React from "react";
import { Button, Grid, Card, CardContent, Typography} from '@material-ui/core'
import PortalNav from "../components/RoleNavBars/PortalNavBar";
import Link from 'next/Link';


	const btnStyle = { margin: '15px 0', height: 60, width: 250 }
	// Elements of the page. Grid and Button elements imported from the MUI library
  	
class adminPortal extends React.Component {
	render() {
	return(
		<>
		<PortalNav />
		<div className="mainMenu" style={{marginTop: '30px'}}>
			<Grid>
				<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
					<CardContent>
						<Typography gutterBottom variant="h4" align="center">
							BAHA Admin Portal
						</Typography>
						<Grid container spacing={1} align="center">
							<Grid xs={12}>
								<Link href="/MainPages/add_cattle_info">
									<Button color='primary' variant='contained' style={btnStyle}>Create Cattle Profile</Button>	
								</Link>
							</Grid>
							<Grid xs={12}>
								<Link href="/MainPages/SearchCattle">
								 	<Button color='primary' variant='contained' style={btnStyle}>Search Cattle Profile</Button>
								</Link>
							</Grid>
                            <Grid xs={12}>
								<Link href="/MainPages/AdminReportsPortal">
									<Button color='primary' variant='contained' style={btnStyle}>Generate Reports</Button>
								</Link>
								
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
export default adminPortal; //exporting adminPortal