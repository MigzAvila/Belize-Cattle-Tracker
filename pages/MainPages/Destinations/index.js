import React from "react";
import data from "../../Data/destinationData.json";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardData from "./Card";

const DestinationsCardList = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "7rem" }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={10}>
            {/* displays all the resorts*/}
            {data.map((values, index) => (      
              <>
                <Grid
                  key={index}
                  sx={{
                    textAlign: "center",
                    color: "#696969",
                    marginBottom: "3.2rem",
                  }}
                  xs={12}
                >
                  <Typography variant="h4" paddingLeft={9.7}>
                    {data[index][index][6]}      {/* District Name*/}
                  </Typography>
                </Grid>
                {values.map((value, indexes) => (
                  <Grid
                    key={indexes}
                    sm={12}
                    lg={3.5}
                    md={5}
                    marginBottom={6}
                    paddingLeft={9.7}
                  >
                    <CardData cardInfo={value} />     {/* displays resort image and resort Name in form of a card*/}
                  </Grid>
                ))}
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DestinationsCardList;
