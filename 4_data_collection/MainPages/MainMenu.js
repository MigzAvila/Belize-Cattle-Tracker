import React from "react";
import { useEffect, useState } from "react"
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import Link from "next/link";
import LoginForm from "../components/LoginForm"
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore"; 

// export [showRole, setShowRole] = useState("")
export const Roles = "";

const MainPortal = () => {
	const cattleInfoCollection = collection(db, "sign_up");

	const btnStyle = { margin: '15px 0', height: 60 }
	const [isAuth, setIsAuth] = useState(false);

    const authorize = () => {
    setIsAuth(true);
		window.localStorage.setItem("isLogIn", "true")
  };

	useEffect(() => {
		let userLog = (window.localStorage.getItem("isLogIn"))
		if (userLog === "true") {
			window.localStorage.setItem("isLogIn", "false")
		}

			
	}, [])



	const setRole = (role) => {
		Roles = role
		window.localStorage.setItem("Role", Roles)
	}


	return (
		<>
		{true? (
			<div>
			<Grid>
				<Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
					<CardContent>
						<Typography gutterBottom variant="h4" align="center">
							Create Cattle Info
						</Typography>
						<Grid container spacing={1}>
							<Grid xs={12}>
								<Button color='primary' variant='contained' style={btnStyle} onClick={() => setRole("Farmer")} fullWidth>
									<Link href="/MainPages/FarmerManagerPortal">
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
									<Link href="/MainPages/AdminManagerPortal">
										ADMIN: BAHA
									</Link>
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</div>

		): <LoginForm isAuth={isAuth} authorize={authorize}/>}
		</>

	)
}
export default MainPortal;