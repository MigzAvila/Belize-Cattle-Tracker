import React from "react";
import { Button, Grid, Typography, Card, CardContent, Input } from '@material-ui/core'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore"; 
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// MUI page styling 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const searchCattle = () => { //Initializing searchCattle
  const router = useRouter()
  const [cattleInfo, setCattleInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

    const [extraRole, setExtraRole] = useState("")

  
  const cattleInfoCollection = collection(db, "cattle_info");
  
  //use effect called whenever the page renders and gets the cattle info and displays
  useEffect(() => {
		let data = window.localStorage.getItem("Role")
    setExtraRole(data)
    const getCattleInfo = async () => {
      const data = await getDocs(cattleInfoCollection);
      setCattleInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.cattle_id })));
    };
    getCattleInfo();
  }
  , [])

  //console.log(cattleInfo)

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
    let searchResult = cattleInfo.filter((cattle) => cattle.cattle_id === search);
    setSearchResult(searchResult);
  }

  const refresh = () => {
    setSearch("");
    setSearchResult([]);
  }

  const btnStyle = { margin: '30px 0', height: 40, width: '40%' }
  const alignBtn = { textAlign: 'center' }
  const borderStyle = { border: '1px solid', borderRadius: '5px' }
  // Page elements. Grid, Box, Search and other elements imported from MUI library.
  return (
    <div className="createInfo" style={{ marginTop: '30px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Link href={`/MainPages/${extraRole}ManagerPortal`}>
              <IconButton >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase

                placeholder="Search cattle"
                inputProps={{ 'aria-label': 'search cattle' }}
                onChange={handleSearch}
                onKeepers={handleSearch}
                value={search}
              />
            </Search>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Search Results
              </Typography>
              <Typography variant="body2" component="p">

                {searchResult.length !== 0 ?
                 (<div>
                    <Link href={`/MainPages/Cattle_Profile_Details/${searchResult[0].cattle_id}`}>                
                                            <Button variant="contained" color="primary">
                                {searchResult[0].cattle_id}
                                            </Button>
                                        </Link>
                                    </div>): <></>

                }


                {/* {searchResult.map((cattle) => (
                  <div>
                    <Typography variant="body2" gutterBottom>
                                {searchResult.map((cattle) => (
                                    <div>
                                        <Link href={`/MainPages/Cattle_Profile_Details/${cattle.cattle_id}`}>                
                                            <Button variant="contained" color="primary">
                                                {cattle.cattle_id}
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </Typography>
                  </div>
                ))} */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
export default searchCattle; // Exporting searchCattle
