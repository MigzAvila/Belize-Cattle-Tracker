import React from "react";
import {useEffect} from "react"
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import Link from "next/link";

// export [showRole, setShowRole] = useState("")
export const Roles = "";

const mainPortal = () => {

	const btnStyle = { margin: '15px 0', height: 60 }
	useEffect(() => {
		window.localStorage.setItem("Role", JSON.stringify(Roles))

, [Roles]	})

const setRole = (role) => {
	Roles = role
	window.localStorage.setItem("Role", Roles)
}


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
								<Button color='primary' variant='contained' style={btnStyle} onClick={() => setRole("Farmer")} fullWidth>
									<Link href="/MainPages/FarmerPortal">
										Birth Stage Info: Farmer/BAHA
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} onClick={() => setRole("Slaughter")} fullWidth>
									<Link href="/MainPages/SlaughterManagerPortal">
										Slaughter Stage: Slaughterhouse Manager
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} onClick={() => setRole("Product")} fullWidth>
									<Link href="/MainPages/ProductManagerPortal">
										Processing/Packaging Stage: Production/Packaging Manager
									</Link>
								</Button>
							</Grid>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} onClick={() => setRole("Admin")} fullWidth>
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