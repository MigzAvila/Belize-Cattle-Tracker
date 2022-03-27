import "../styles/globals.css";
import "../styles/generateReport.css"
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {db} from './firebase-config';
import {collection, getDocs} from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user_info, setUsers] = useState([]);
  const userCollectionRef = collection(db, "user_info");



  useEffect(() => {
    const getUserInfo = async () => {
      const userinfo = await getDocs(userCollectionRef);
      setUsers(userinfo.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUserInfo();
  }, []);



  return (
    <>
     <animated.div>
          <Component {...pageProps} />
        </animated.div>
    </>
  );
}

export default MyApp;
