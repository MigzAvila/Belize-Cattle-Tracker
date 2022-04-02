import React from "react";
import { Button, Grid} from '@material-ui/core'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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

const searchCattle =()=> {
	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

	const btnStyle={margin:'30px 0', height: 40, width: '85%'}
    const alignBtn={textAlign: 'center'}
	
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
				<Grid align = 'center'>
					<h2>Search Cattle Profile</h2>
                    <h4>Please enter Cattle ID below.</h4>
				</Grid>
                <Box sx={{ flexGrow: 1 }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
                    </Search>
                </Box>
                <Grid style={alignBtn}>
                    <Button  color='primary' variant='contained' style={btnStyle} fullWidth required>SEARCH</Button>
                </Grid>
		  	</div>
	  	</Grid>
  )
}
export default searchCattle;