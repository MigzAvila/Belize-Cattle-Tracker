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
const cBirthDetails = () => {

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
                        Cattle ID: add cattle id from DB
                    </Typography>
                    <CardContent>
                        <Typography paragraph>
                            Farmer:
                        </Typography>
                        <Typography paragraph>
                            Gender:
                        </Typography>
                        <Typography paragraph>
                            Breed:
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
                            <Typography paragraph>
                                The info from the database should be displayed here.
                            </Typography>
                            <Typography paragraph align="center" fontWeight="bold">
                                Birth Info
                            </Typography>
                            <Typography paragraph>
                                Birth Date:
                            </Typography>
                            <Typography paragraph>
                                Underlying Health Issues:
                            </Typography>
                            <Typography paragraph>
                                Weight:
                            </Typography>
                            <Typography paragraph>
                                Location:
                            </Typography>
                            <Typography paragraph>
                                Rearing Type:
                            </Typography>
                            <Typography paragraph>
                                Antibiotics Used:
                            </Typography>
                            <Typography paragraph>
                                Reproduction Status:
                            </Typography>
                            <Typography paragraph>
                                DNA Type:
                            </Typography>
                        </CardContent>
                    </Collapse><br></br>
                    <Grid>
                        <Button color='primary' variant='contained' style={btnExit}>Exit</Button>
                        <Button type="submit" color='primary' variant='contained' style={btnAdd}>Add</Button><br></br>
                    </Grid>
                </Card>
            </Grid>
        </div >

    )
}
export default cBirthDetails; // Exporting mainPortal