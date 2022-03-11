import { padding, textAlign } from "@mui/system";
import React from "react";
import { Button, Grid,Paper, TextField, Typography, Link} from '@material-ui/core'
import loginStyle from "../../styles/Login.module.css";


const loginForm =()=> {
	const paperStyle={padding :20, height: '70vh', width: 350, margin:"20px auto"}
	const btnstyle={margin:'30px 0'}
	const imageStyle={borderRadius: '50%'}
  	return(
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align = 'center'>
					<img src="images/logo (2).png" width={"100px"} length={"100px"} style={imageStyle}></img>
					<h2>Log In</h2>
				</Grid>
				<TextField label='Role ID' placeholder='Enter Role ID' fullWidth required/>
				<TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
				<Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Log in</Button>
				<Typography align="right"> 
					<Link href='#'>
						Sign Up? 
					</Link>
				</Typography>
		  	</Paper>
	  	</Grid>
  )


}

export default loginForm;
