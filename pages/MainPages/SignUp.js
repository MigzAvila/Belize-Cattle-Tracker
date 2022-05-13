import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import loginClass from "../../styles/Login.module.css"
import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const signUpForm = () => {

	const btnStyle = { margin: '30px 0' }
	const imageStyle = { borderRadius: '50%' }

	return (
		<Grid>
			<div className="createInfo" style={{ marginTop: '30px' }}>
				<Grid>
					<Card style={{ maxWidth: 400, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
						<CardContent>
							<Grid align='center'>
								<img src="../images/logo (2).png" width={"100px"} length={"100px"} style={imageStyle}></img>
								<h2>Sign Up</h2>
							</Grid>
							<TextField label='Name' placeholder='Name' fullWidth required />
							<TextField label='Email' placeholder='Email' fullWidth required />
							<TextField label='Role ID' placeholder='Role ID' fullWidth required />
							<TextField label='Password' placeholder='Enter Password' type='password' fullWidth required />
							<TextField label='Confirm Password' placeholder='Confirm Password' type='password' fullWidth required />
							<Button color='primary' variant='contained' style={btnStyle} fullWidth>Sign Up</Button>
							<Typography align="right">

								<span className={loginClass.span} >
									<Link href='/components/LoginForm'>
										Log In?
									</Link>
								</span>

							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</div>
		</Grid>
	)
}
export default signUpForm;
