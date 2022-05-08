import React from "react";
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import Link from "next/link";

const mainPortal = () => {

	const btnStyle = { margin: '15px 0', height: 60 }

	return (
		<div className="mainMenu" style={{marginTop: '30px'}}>
			<Grid>
				<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
					<CardContent>
						<Typography gutterBottom variant="h4" align="center">
							Create Cattle Info
						</Typography>
						<Grid container spacing={1}>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} fullWidth>
									<Link href="/MainPages/FarmerPortal">
										Birth Stage Info: Farmer/BAHA
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} fullWidth>
									<Link href="/MainPages/SlaughterManagerPortal">
										Slaughter Stage: Slaughterhouse Manager
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} fullWidth>
									<Link href="/MainPages/PkgManagerPortal">
										Processing/Packaging Stage: Production/Packaging Manager
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} fullWidth>
									<Link href="/MainPages/AdminPortal">
										ADMIN: BAHA
									</Link>
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</div>

	)
}
export default mainPortal;