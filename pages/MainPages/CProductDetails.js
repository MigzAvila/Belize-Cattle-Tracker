import React from "react";
import { Grid } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@material-ui/core'
import Link from 'next/Link'
import { useRouter } from 'next/router'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

//Initializing Main Portal
const cProductDetails = () => {
    const router = useRouter()

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const btnExit = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'green', align: 'left' };
    const btnAdd = { margin: '10px 0', width: '30%', height: 40, align: 'right' };

    // Page elements. Grid, Card, CardActionArea and other elements imported from MUI library
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                <Typography gutterBottom variant="h4" align="center">
                    Cattle ID: 36
                        <Typography paragraph>
                            
                        </Typography>
                    </Typography>
                    <CardContent>
                        <Typography paragraph>
                            Farmer: Bob Ross
                        </Typography>
                        <Typography paragraph>
                            Gender: Male
                        </Typography>
                        <Typography paragraph>
                            Breed: Hereford
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography fontWeight="bold">
                            View More Details
                        </Typography>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph align="center" fontWeight="bold">
                                Birth Info
                            </Typography>
                            <Typography paragraph>
                                Birth Date: April 3, 2021
                            </Typography>
                            <Typography paragraph>
                                Underlying Health Issues: None
                            </Typography>
                            <Typography paragraph>
                                Weight: 400 lbs
                            </Typography>
                            <Typography paragraph>
                                Location: Spanish Lookout
                            </Typography>
                            <Typography paragraph>
                                Rearing Type: Free Roaming
                            </Typography>
                            <Typography paragraph>
                                Antibiotics Used: Medicine 
                            </Typography>
                            <Typography paragraph>
                                Reproduction Status: None
                            </Typography>
                            <Typography paragraph>
                                DNA Type: Hereford 
                            </Typography>
                        </CardContent>
                        <CardContent>
                        <Typography paragraph align="center" fontWeight="bold">
                                Slaughter Info
                            </Typography>
                            <Typography paragraph>
                                Slaughter Date: Februaury 28, 2022
                            </Typography>
                            <Typography paragraph>
                                Slaughterhouse Name: Running W
                            </Typography>
                            <Typography paragraph>
                                Slaughtering Methods Used: Stunning
                            </Typography>
                            <Typography paragraph>
                                Factory Name:Running W
                            </Typography>
                            <Typography paragraph>
                                Factory Location: San Ignacio
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph align="center" fontWeight="bold">
                                Product/Packaging Info
                            </Typography>
                            <Typography paragraph>
                                Company Name: Running W
                            </Typography>
                            <Typography paragraph>
                                Meat Product Type: Ribs
                            </Typography>
                            <Typography paragraph>
                                Product Description: 10% lean
                            </Typography>
                            <Typography paragraph>
                                Product Weight: 12 lbs
                            </Typography>
                            <Typography paragraph>
                                Packaging Date: March 1, 2022
                            </Typography>
                            <Typography paragraph>
                                Expiry Date: April 30, 2022
                            </Typography>
                            <Typography paragraph>
                                Batch Number: 123
                            </Typography>
                            <Typography paragraph>
                                Store Name: Luckys
                            </Typography>
                            <Typography paragraph>
                                Store Location: Belmoopan
                            </Typography>
                            <Typography paragraph>
                                Cost Per Unit: 12.31
                            </Typography>
                            <Typography paragraph>
                                Trading Details: Cash 
                            </Typography>
                        </CardContent>
                    </Collapse><br></br>
                    <Grid>
                        <Button color='primary' variant='contained' style={btnExit} onClick={() => router.back()}>Exit</Button>
                        <Link href="/MainPages/add_product_info">
                            <Button type="submit" color='primary' variant='contained' style={btnAdd}>Add</Button>
                        </Link>
                        <br></br>
                    </Grid>
                </Card>
            </Grid>
        </div >

    )
}
export default cProductDetails; // Exporting cProductDetails