import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import navStyle from "../../../styles/NavBar.module.css";
import Fade from 'react-reveal/Fade';

//resort information for Card Details page
export const ResortCard = {
  resortName: "",
  resortLong: "",
  resortLat: "",
  resortImage: "",
  resortInfo: "",
  resortCarousel: [],
  resortDistrict: "",
  resortFoodInfo:"",
  resortAccommodation: "",
  resortActivities: "",
};

const CardData = ({ cardInfo }) => {
  const [resortData, setResortName] = useState({
    resortName: cardInfo[0],
    resortImage: cardInfo[3],
  });

  //passes data for resort been clicked to the CardDetails page 
  const goToCardDetails = () => {
    ResortCard.resortName = cardInfo[0];
    ResortCard.resortLong = cardInfo[1];
    ResortCard.resortLat = cardInfo[2];
    ResortCard.resortImage = cardInfo[3];
    ResortCard.resortInfo = cardInfo[4];
    ResortCard.resortCarousel = cardInfo[5];
    ResortCard.resortDistrict = cardInfo[6];
    ResortCard.resortFoodInfo = cardInfo[7];
    ResortCard.resortAccommodation = cardInfo[8];
    ResortCard.resortActivities = cardInfo[9];
  };

  return (
      <Fade cascade>
        <Card
          item
          sx={{
            width: 360,
            minWidth: 345,
            margin: "0 auto",
            boxShadow: "none",
          }}
        >
          <Link href="/MainPages/Destinations/CardDetails">
            <CardActionArea onClick={goToCardDetails}>
              <CardMedia
                component="img"
                height="220"
                image={resortData.resortImage}
                alt="green iguana"
              />
            </CardActionArea>
          </Link>
          <CardActions>
            <Button
              className={navStyle.line}
              size="small"
              color="primary"
              sx={{
                textAlign: "center",
                margin: "0 auto",
                "&:hover": { color: "coral", borderRadius: "none", },
              }}
              onClick={goToCardDetails}
            >
              <Link href="/MainPages/Destinations/CardDetails">
                {resortData.resortName}
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Fade>  
  );
};
export default CardData;
