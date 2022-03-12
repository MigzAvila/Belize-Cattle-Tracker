import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Button, Grid, TextField, Typography} from '@material-ui/core'
import loginClass from "../../../styles/Login.module.css"


const loginForm =()=> {
	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

	const btnStyle={margin:'30px 0'}
	const imageStyle={borderRadius: '50%'}
	
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
				<Grid align = 'center'>
					<img src="images/logo (2).png" width={"100px"} length={"100px"} style={imageStyle}></img>
					<h2>Log In</h2>
				</Grid>
				<TextField label='Role ID' placeholder='Enter Role ID' fullWidth required/>
				<TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
				<Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Log in</Button>
				<Typography align="right"> 
					
						<span className= {loginClass.span} >
							<Link href='#'>
								Sign Up? 
							</Link>
						</span>
					
				</Typography>
		  	</div>
	  	</Grid>
  )


}

export default loginForm;
