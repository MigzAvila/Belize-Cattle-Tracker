import * as React from "react";
import { styled } from "@mui/material/styles";
//import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//import Box from "@mui/material/Box";
//import '../generateReport.css';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu.js';

import cattle_info from '../data_info/cattle_info';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  background: "transparent",
}));

const createDataState = (dataState) =>{
  return{
    result: process(cattle_info.slice(0), dataState),
    dataState: dataState
  };
}

class GenerateReport extends React.Component {
  state = createDataState({
    take: 10,
    skip: 0
  });

  dataStateChange = (event) =>{
    this.setState(createDataState(event.dataState));
  }

  render() {
    return(
      <Grid
        data={this.state.result}
        {...this.state.dataState}
        onDataStateChange={this.dataStateChange}
        sortable={true}
        pageable={true}

        pageSize={8}
        >
          <Column field="cattle_id" title="Cattle ID" filter={'numeric'} ColumnMenu={ColumnMenu}/>
          <Column field="dna_type" title="DNA" ColumnMenu={ColumnMenu}/>
          <Column field="birth_date" title="DOB" ColumnMenu={ColumnMenu}/>
          <Column field="breed" title="Breed" ColumnMenu={ColumnMenu}/>
          <Column field="farmer" title="Farmer" ColumnMenu={ColumnMenu}/>
          <Column field="gender" title="Gender" ColumnMenu={ColumnMenu}/>
          <Column field="location" title="Location" ColumnMenu={ColumnMenuCheckboxFilter}/>
          <Column field="eartag_code" title="Ear Tag" ColumnMenu={ColumnMenu}/>
        </Grid>
    )
  }
};

export default GenerateReport;
