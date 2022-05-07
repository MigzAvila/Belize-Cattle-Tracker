import React from "react";
import { Button, Grid, Typography, Card, CardContent } from '@material-ui/core'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

  const btnStyle = { margin: '30px 0', height: 40, width: '40%' }
  const alignBtn = { textAlign: 'center' }
  const borderStyle = { border: '1px solid', borderRadius: '5px' }
  // Page elements. Grid, Box, Search and other elements imported from MUI library.
  return (
    <div className="createInfo" style={{ marginTop: '30px' }}>
      <Grid>
        <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <CardContent>
            <Typography gutterBottom variant="h4" align="center">
              Search Cattle Profile
            </Typography>
            <Typography style={{ textAlign: 'center' }}>
              Please enter cattle ID below.
            </Typography><br></br>
            <Box sx={{ flexGrow: 1 }} style={borderStyle}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>
            <Grid style={alignBtn}>
              <Button color='primary' variant='contained' style={btnStyle} fullWidth required>SEARCH</Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}
export default searchCattle; // Exporting searchCattle