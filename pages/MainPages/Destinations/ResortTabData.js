import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabStyle from "../../../styles/NavBar.module.css";
import { ResortCard } from "./Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 5, pr: 5, pt: 3, pb: 6, textAlign: "left"}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", p: 5 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "#212121", boxShadow: "none"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#212121" } }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={TabStyle.tabline} label="Information" {...a11yProps(0)} />
          <Tab className={TabStyle.tabline} label="Accomodation" {...a11yProps(1)} />
          <Tab className={TabStyle.tabline} label="Food" {...a11yProps(2)} />
          <Tab className={TabStyle.tabline} label="Activities" {...a11yProps(3)} />
          <Tab className={TabStyle.tabline} label="Loacation" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <b>RESORT HIGHLIGHTS</b> {ResortCard.resortInfo}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h5>ALL SUITE ACCOMMODATIONS</h5>
          <h5> Ocean View or Front Suite</h5>
          {ResortCard.resortAccommodation}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <b>The Table</b>
          {ResortCard.resortFoodInfo}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <b>Beach and Pool</b>
          {ResortCard.resortActivities}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <h5>this will be the location via google maps</h5>
          {ResortCard.resortActivities}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
