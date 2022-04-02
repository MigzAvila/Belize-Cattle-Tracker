import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Button, Grid, TextField, Typography} from '@material-ui/core'
import loginClass from "../../../styles/Login.module.css"

const apiService = require("../APIcalls/APIService");
const loginForm =(props)=> {
  

  const [userAuth, setUserAuth] = useState([]);
  const [Username, setUsername] = useState(""); //login username
  const [Password, setPassword] = useState(""); //login password

  useEffect(() => {
    try {
      apiService.getUsers().then((res) => {
       
        setUserAuth(res);
      });
    } catch (e) {
      console.log(e);
      setUserAuth([]);
    }
  }, [props.isAuth]);

  const handleChange = (prop) => (event) => {
    if (prop === "password") {
      setPassword((prevState) => (prevState = event.target.value));

    } else if (prop === "username") {
      setUsername((prevState) => event.target.value);
    }
  };
  const updateLoginStatus = (name, auth) => {
    apiService.login(name, auth);}

  const handleLoginCredentials = (event) => {
    event.preventDefault();
    //checks if username name matches with password
    let actual_password = userAuth.find((user) => user.name === Username);
    const status = false;
    if (actual_password) {
      status = actual_password["password"] === Password ? true :false;
    }     

    if (status) {
      props.authorize();
      updateLoginStatus(Username, status);
    }
  };



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
				<TextField label='Name' placeholder='Enter Name' onChange={handleChange("Name")} fullWidth required />
				<TextField label='Email' placeholder='Enter Email' type='Email' onChange={handleChange("Email")} fullWidth required/>
				<TextField label='Password' placeholder='Password' type='password' fullWidth required />
				<TextField label='ConfirmPassword' placeholder='Confirm Password' type='password' onChange={handleChange("ConfirmPassword")} fullWidth required/>
				<TextField label='RoleID' placeholder='Role Code' type='text' onChange={handleChange("RoleID")} fullWidth required/>
				<Button  color='primary' variant='contained' style={btnStyle} fullWidth  onClick={handleLoginCredentials}>Sign Up</Button>
				<Typography align="right"> 
					
						<span className= {loginClass.span} >
							<Link href='#'>
								Sign In? 
							</Link>
						</span>
					
				</Typography>
		  	</div>
	  	</Grid>
  )
}

export default loginForm;
