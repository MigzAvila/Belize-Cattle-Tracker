import React from "react";
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Button, Grid, TextField, Card, CardContent, Typography } from '@material-ui/core'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//key={index}

function createInfo() {

  const [newProductInfo, setNewProductInfo] = useState({
    newCattleID: 0,
    newBatchNum: "",
    newCostPu: "",
    newExpiryDate: "",
    newFactoryDes: "",
    newFactoryName: "",
    newMeatProdType: "",
    newPckgDate: "",
    newProdDesc: "",
    newProdWeight: "",
    newStoreLoc: "",
    newStoreName: "",
    newTraceNum: "",
    newTradeDets: "",
  });

  const apiService = require("../components/APIcalls/APIService");
  const [productInfo, setproductInfo] = useState([]);
  const productInfoCollection = collection(db, "prodpack_info");

  const createProduct = async () => {
    let status = await apiService.addNewProduct(newProductInfo);
    if (status) {
      await addDoc(productInfoCollection, {
        cattle_id: newProductInfo.newCattleID, btch_num: newProductInfo.newBatchNum, cost_pu: newProductInfo.newCostPu,
        expr_date: newProductInfo.newExpiryDate, fctry_dest: newProductInfo.newFactoryDes, fctry_name: newProductInfo.newFactoryName, meat_prodtype: newProductInfo.newMeatProdType,
        pkg_date: newProductInfo.newPckgDate, prod_descr: newProductInfo.newProdDesc, prod_weight: newProductInfo.newProdWeight,
        store_loc: newProductInfo.newStoreLoc, store_name: newProductInfo.newStoreName, trace_num: newProductInfo.newTraceNum, trace_dets: newProductInfo.newTradeDets
      })
    }
  };

  //use effect called whenever the page renders and gets the cattle info and displays
  useEffect(() => {

    const getProductInfo = async () => {
      const data = await getDocs(productInfoCollection);
      setproductInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProductInfo();
  }, [])

  const btnCancel = { margin: '10px 0', marginLeft: '15%', marginRight: '10%', width: '30%', height: 40, backgroundColor: 'red', align: 'left' };
  const btnSave = { margin: '10px 0', width: '30%', height: 40, backgroundColor: 'green', align: 'right' };
  const [value, setValue] = React.useState(null);

  return (
    <div className="createInfo" style={{ marginTop: '30px' }}>
      <Grid>
        <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
          <CardContent>
            <Typography gutterBottom variant="h4" align="center">
              Create New Packaging/Product Info
            </Typography><br></br>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField label='Cattle ID' placeholder="Cattle ID" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newCattleID: e.target.value })} value={newProductInfo.newCattleID} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Batch Number' placeholder="Batch Number" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newBatchNum: e.target.value })} value={newProductInfo.newBatchNum} />
                </Grid><br></br><br></br><br></br><br></br>
                <Grid xs={12} sm={6} item>
                  <TextField label='Factory Name' placeholder="Factory Name" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newFactoryName: e.target.value })} value={newProductInfo.newFactoryName} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Factory Destination' placeholder="Factory Destination" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newFactoryDes: e.target.value })} value={newProductInfo.newFactoryDes} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Package Date' placeholder="Package Date" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newPckgDate: e.target.value })} value={newProductInfo.newPckgDate} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Expiry Date' placeholder="Expiry Date" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newExpiryDate: e.target.value })} value={newProductInfo.newExpiryDate} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Trace Number' placeholder="Trace Number" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newTraceNum: e.target.value })} value={newProductInfo.newTraceNum} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Trade Details' placeholder="Trade Details" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newTradeDets: e.target.value })} value={newProductInfo.newTradeDets} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Meat Product Type' placeholder="Meat Product Type" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newMeatProdType: e.target.value })} value={newProductInfo.newMeatProdType} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Cost Per Unit' placeholder="Cost Per Unit" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newCostPu: e.target.value })} value={newProductInfo.newCostPu} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Store Name' placeholder="Store Name" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newStoreName: e.target.value })} value={newProductInfo.newStoreName} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Store Location' placeholder="Store Location" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newStoreLoc: e.target.value })} value={newProductInfo.newStoreLoc} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label='Product Weight' placeholder="Product Weight" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newProdWeight: e.target.value })} value={newProductInfo.newProdWeight} />
                </Grid><br></br><br></br><br></br><br></br>
                <Grid xs={12} item>
                  <TextField label='Product Description' multiline rows={5} placeholder="Product Description" variant="outlined" fullWidth required onChange={(e) => setNewProductInfo({ ...newProductInfo, newProdDesc: e.target.value })} value={newProductInfo.newProdDesc} />
                </Grid><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Button color='primary' variant='contained' style={btnCancel}>Cancel</Button>
                <Button type="submit" color='primary' variant='contained' style={btnSave} onClick={createProduct}> Add Product</Button><br></br><br></br><br></br>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {productInfo.map((product, index) => {
        return (
          <Card style={{ maxWidth: 960, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <TableContainer>
                <Table key={index} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Cattle ID</TableCell>
                      <TableCell align="right">Batch Number</TableCell>
                      <TableCell align="right">Cost Per Unit</TableCell>
                      <TableCell align="right">Expiry Date</TableCell>
                      <TableCell align="right">Factory Destination</TableCell>
                      <TableCell align="right">Factory Name</TableCell>
                      <TableCell align="right">Meat Product Type</TableCell>
                      <TableCell align="right">Package Date</TableCell>
                      <TableCell align="right">Product Description</TableCell>
                      <TableCell align="right">Product Weight</TableCell>
                      <TableCell align="right">Store Location</TableCell>
                      <TableCell align="right">Store Name</TableCell>
                      <TableCell align="right">Trace Number</TableCell>
                      <TableCell align="right">Trade Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                    >
                      <TableCell>{product.cattle_id}</TableCell>
                      <TableCell align="right">{product.btch_num}</TableCell>
                      <TableCell align="right">{product.cost_pu}</TableCell>
                      <TableCell align="right">{product.expr_date}</TableCell>
                      <TableCell align="right">{product.fctry_dest}</TableCell>
                      <TableCell align="right">{product.fctry_name}</TableCell>
                      <TableCell align="right">{product.meat_prodtype}</TableCell>
                      <TableCell align="right">{product.pkg_date}</TableCell>
                      <TableCell align="right">{product.prod_descr}</TableCell>
                      <TableCell align="right">{product.prod_weight}</TableCell>
                      <TableCell align="right">{product.store_loc}</TableCell>
                      <TableCell align="right">{product.store_name}</TableCell>
                      <TableCell align="right">{product.trace_num}</TableCell>
                      <TableCell align="right">{product.trace_dets}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

}

export default createInfo;