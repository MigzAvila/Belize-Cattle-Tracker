import React from "react";
import {Grid} from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//Initializing Main Portal
const mainPortal =()=> {
    // Page styling
	const paperStyle={padding :20, height: 'auto', width: 350, margin:"20px auto",
	 				  boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
	  				  borderRadius: "10px",}

	const btnStyle={margin:'15px 0', height: 60}
	// Page elements. Grid, Card, CardActionArea and other elements imported from MUI library
  	return(
		<Grid>
			<div elevation={10} style={paperStyle}>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
				<Grid align = 'center'>
					<h2>Cattle Profiles</h2>
				</Grid>
				
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="155"
                            image="../images/cattle.png"
                            alt="cattle"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cattle ID: 40453
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Farmer: Bob Ross
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

		  	</div>
	  	</Grid>
  )
}
export default mainPortal; // Exporting mainPortal