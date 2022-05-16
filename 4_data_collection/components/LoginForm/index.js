import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import loginClass from "../../../styles/Login.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const apiService = require("../APIcalls/APIService");
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore"; 

//resort information for Card Details page
export const Roles = "";

const loginForm = (props) => {
const cattleInfoCollection = collection(db, "sign_up");

  const [userAuth, setUserAuth] = useState([]);
  const [Username, setUsername] = useState(""); //login username
  const [Password, setPassword] = useState(""); //login password
  const [Role, setRole] = useState("Packaging"); //login Role
	const [user, setuser] = useState(false);


    const [extraRole, setExtraRole] = useState("")
  	useEffect(() => {
		
    const getUserInfo = async () => {
       let data1 = await getDocs(cattleInfoCollection);
    
      setuser(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			
		};
		getUserInfo();
      // window.localStorage.getItem("Role", JSON.stringify(userAuth))

    }, [userAuth])

  // useEffect(() => {
  //   try {
  //     apiService.getUsers().then((res) => {

  //       setUserAuth(res);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     setUserAuth([]);
  //   }
  // }, [props.isAuth]);

  const handleChange = (prop) => (event) => {
    if (prop === "password") {
      setPassword((prevState) => (prevState = event.target.value));

    } else if (prop === "username") {
      setUsername((prevState) => event.target.value);
    }
  };
  const updateLoginStatus = (name, auth) => {
    apiService.login(name, auth);
  }

  const handleLoginCredentials = (event) => {
    console.log(user)
    event.preventDefault();
    //checks if username name matches with password
    let actual_password = user.find((user) => user.role_id === Username);

    console.log(actual_password)
    
    const status = false;
    if (actual_password) {
      status = actual_password.pw === Password ? true : false;
    }

    if (status) {
      props.authorize();
    }

    setRole("Farmer");
  };

  const btnStyle = { margin: '30px 0' }
  const imageStyle = { borderRadius: '50%' }

  return (
    <Grid>
      <div className="createInfo" style={{ marginTop: '30px' }}>
        <Grid>
          <Card style={{ maxWidth: 400, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
            <CardContent>
              <Grid align='center'>
                <img src="../../images/logo.png" width={"100px"} length={"100px"} style={imageStyle}></img>
                <h2>Log In</h2>
              </Grid>
              <TextField label='Role ID' placeholder='Enter Role ID' onChange={handleChange("username")} fullWidth required />
              <TextField label='Password' placeholder='Enter Password' type='password' onChange={handleChange("password")} fullWidth required />
              <Link item xs={2} href='/MainPages/MainMenu'>
              <Button color='primary' variant='contained' style={btnStyle} fullWidth onClick={handleLoginCredentials}>Log in</Button>
               </Link>
              <Typography align="right">
                <span className={loginClass.span} >
                  <Link item xs={2} href='/MainPages/SignUp'>
                    Sign Up?
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
export default loginForm;
