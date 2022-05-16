import React from 'react'
import { useRouter } from 'next/router'
import { collection, doc } from "firebase/firestore";
import { db } from '../../firebase-config';
import { getDocs } from "firebase/firestore";
import { Box, Card, CardActions, CardContent, CircularProgress, Collapse, Grid, IconButton, Link, Typography } from '@material-ui/core';
import { useState } from 'react';
//import { ExpandMore } from '@material-ui/icons';
//import Typography from 'typography';
//import { CardContent, Typography } from 'react-native-material-cards';;
import { styled } from '@mui/material/styles';
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



const CattleProfileDetails = () => {
    const router = useRouter()
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const btnExit = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'green', align: 'left' };
    const btnAdd = { margin: '10px 0', width: '30%', height: 40, align: 'right' };

    const { cattleID } = router.query
    //console.log(cattleID);

    const [isLoading, setIsLoading] = React.useState(true);
    const [cattleIinfo, setCattleInfo] = React.useState(null);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const cattleInfoCollection = collection(db, "cattle_info");
 
    React.useEffect(() => {
        const getCattleInfo = async () => {
          const data = await getDocs(cattleInfoCollection);
          setCattleInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.cattle_id })));
          setIsLoading(false);
        };
        getCattleInfo();
      }
      , [])

    //select cattle info from cattleID

     if(isLoading) {
     return <Grid  style={{height: "200px", pt: "200px"}} container alignItems="center" justifyContent="center">
            <Grid item xs={4} sx={{paddingTop: "200px"}} container alignItems="center" justifyContent="center">
                 <CircularProgress />
           </Grid>
        </Grid>
     }

        const cattleInfo = cattleIinfo.filter((cattle) => cattle.cattle_id === cattleID);
        console.log(cattleInfo);

        //const cattleInfo = cattleIinfo.filter((cattle) => cattle.cattle_id === cattleID);
        //console.log(cattleInfo);



    return (
        
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                    <Typography gutterBottom variant="h4" align="center">
                        Cattle ID: {cattleInfo[0].cattle_id}
                    </Typography>
                    <CardContent>
                        <Typography paragraph>
                            Farmer: {cattleInfo[0].farmer}
                        </Typography>
                        <Typography paragraph>
                            Gender: {cattleIinfo[0].gender}
                        </Typography>
                        <Typography paragraph>
                            Breed: {cattleIinfo[0].breed}
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
                                Birth Date: {cattleInfo[0].birth_date}
                            </Typography>
                            <Typography paragraph>
                                Underlying Health Issues: {cattleInfo[0].und_hlth_issues}
                            </Typography>
                            <Typography paragraph>
                                Weight: {cattleInfo[0].cattle_weight}
                            </Typography>
                            <Typography paragraph>
                                Location: {cattleInfo[0].location}
                            </Typography>
                            <Typography paragraph>
                                Rearing Type: {cattleInfo[0].rearing_type}
                            </Typography>
                            <Typography paragraph>
                                Antibiotics Used: {cattleInfo[0].antbio_type}
                            </Typography>
                            <Typography paragraph>
                                Reproduction Status: {cattleInfo[0].repro_stat}
                            </Typography>
                            <Typography paragraph>
                                DNA Type:{cattleInfo[0].dna_type}
                            </Typography>
                        </CardContent>
                    </Collapse><br></br>
                    <Grid>
                        <Button color='primary' variant='contained' style={btnExit} onClick={() => router.back()}>Exit</Button>
                        <Link href="/MainPages/add_cattle_info">
                            <Button type="submit" color='primary' variant='contained' style={btnAdd}>Add</Button>
                        </Link>
                    </Grid>
                </Card>
            </Grid>
        </div >
    )
        

    
}

export default CattleProfileDetails;