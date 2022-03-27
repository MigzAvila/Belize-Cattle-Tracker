import "../styles/globals.css";
import "../styles/generateReport.css"
import NavBar from "./NavBar/navBar";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Zoom from "react-reveal/Zoom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LoginForm from "./components/LoginForm/index";
import {db} from './firebase-config';
import {collection, getDocs} from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user_info, setUsers] = useState([]);
  const [isCustomer, setIsCustomer] = useState([]);
  const userCollectionRef = collection(db, "user_info")

  useEffect(() => {
    const getUserInfo = async () => {
      const userinfo = await getDocs(userCollectionRef);
      setUsers(userinfo.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    setIsCustomer(pageProps)
  }, [pageProps]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const [isAuth, setIsAuth] = useState(true);


  const [background, setBackground] = useState(
    "https://c1.wallpaperflare.com/preview/440/781/267/agriculture-blur-close-up-countryside.jpg"
  );

  const authorize = () => {
    setIsAuth(true);
  };

  const Customer = () => {
    console.log("HERE", pageProps," JERE");
    // return isCustomer.includes("MainPages");
  };

  //breakpoints
  const mediaQuery = useMediaQuery(useTheme().breakpoints.down("785"));
  const mediumMediaQuery = useMediaQuery(
    useTheme().breakpoints.between("601", "785")
  );

  const HeadingItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
    fontFamily: "roboto",
    textShadow: "2px 2px 5px black",
    fontSize: mediaQuery ? "25px" : "40px",
    color: "white",
  }));
  return (
    <>
    {isAuth || Customer() ? ( <animated.div>
          <Box
            sx={{
              width: "auto",
              height: "auto",
              paddingTop: "50px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingBottom: "2rem",
              marginBottom: "1rem",
              backgroundImage: `url(${background}) `,
            }}
          >
            <NavBar />
            
            <HeadingItem>
              <Zoom bottom cascade>
                <span>
                  <div>
                    <img
                      src="../images/logo (2).png"
                      style={{
                        alt: "Logo",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "45px" }}>
                    Belize Cattle Products
                  </span>
                  <br />
                  <span style={{ fontSize: "20px" }}>
                    Compare Price, and view its history
                  </span>
                </span>
              </Zoom>
            </HeadingItem>
          </Box>
          <Component {...pageProps} />
        </animated.div> ): <LoginForm isAuth={isAuth} authorize={authorize}/>}
    </>
  );
}

export default MyApp;
