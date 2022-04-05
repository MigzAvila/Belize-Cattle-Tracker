import { useState, useEffect } from "react";
import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";



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
        console.log(status);
        if (status) {
          await addDoc(productInfoCollection, {cattle_id: newProductInfo.newCattleID, btch_num: newProductInfo.newBatchNum, cost_pu: newProductInfo.newCostPu,
        expr_date: newProductInfo.newExpiryDate, fctry_dest: newProductInfo.newFactoryDes, fctry_name: newProductInfo.newFactoryName, meat_prodtype: newProductInfo.newMeatProdType,
        pkg_date: newProductInfo.newPckgDate, prod_descr: newProductInfo.newProdDesc, prod_weight: newProductInfo.newProdWeight,
        store_loc: newProductInfo.newStoreLoc, store_name: newProductInfo.newStoreName, trace_num: newProductInfo.newTraceNum, trace_dets: newProductInfo.newTradeDets})
        }
    };
    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getProductInfo = async () => {
            const data = await getDocs(productInfoCollection);
            setproductInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getProductInfo();
    }, [])

    return (
    <div className="createInfo">
        <input type="number" placeholder="Cattle id..." onChange={(e) => setNewProductInfo({...newProductInfo, newCattleID: e.target.value})} value={newProductInfo.newCattleID} />
        <input placeholder="Batch Number..." onChange={(e) => setNewProductInfo({...newProductInfo, newBatchNum: e.target.value})} value={newProductInfo.newBatchNum}/>
        <input placeholder="Cost Per Unit..." onChange={(e) => setNewProductInfo({...newProductInfo, newCostPu: e.target.value})} value={newProductInfo.newCostPu}/>
        <input placeholder="Expiry Date..." onChange={(e) => setNewProductInfo({...newProductInfo, newExpiryDate: e.target.value})} value={newProductInfo.newExpiryDate} />
        <input placeholder="Factory Destination..." onChange={(e) => setNewProductInfo({...newProductInfo, newFactoryDes: e.target.value})} value={newProductInfo.newFactoryDes}/>
        <input placeholder="Factory Name..." onChange={(e) => setNewProductInfo({...newProductInfo, newFactoryName: e.target.value})} value={newProductInfo.newFactoryName}/>
        <input placeholder="Meat Product Type..." onChange={(e) => setNewProductInfo({...newProductInfo, newMeatProdType: e.target.value})} value={newProductInfo.newMeatProdType}/>
        <input placeholder="Package Date..." onChange={(e) => setNewProductInfo({...newProductInfo, newPckgDate: e.target.value})} value={newProductInfo.newPckgDate}/>
        <input placeholder="Product Description..." onChange={(e) => setNewProductInfo({...newProductInfo, newProdDesc: e.target.value})} value={newProductInfo.newProdDesc}/>
        <input placeholder="Product Weight..." onChange={(e) => setNewProductInfo({...newProductInfo, newProdWeight: e.target.value})} value={newProductInfo.newProdWeight}/>
        <input placeholder="Store Location..." onChange={(e) => setNewProductInfo({...newProductInfo, newStoreLoc: e.target.value})} value={newProductInfo.newStoreLoc}/>
        <input placeholder="Store Name..." onChange={(e) => setNewProductInfo({...newProductInfo, newStoreName: e.target.value})} value={newProductInfo.newStoreName}/>
        <input placeholder="Trace Number..." onChange={(e) => setNewProductInfo({...newProductInfo, newTraceNum: e.target.value})} value={newProductInfo.newTraceNum}/>
        <input placeholder="Trade Details..." onChange={(e) => setNewProductInfo({...newProductInfo, newTradeDets: e.target.value})} value={newProductInfo.newTradeDets}/>

        <button onClick={createProduct}> Add Product</button>
        {productInfo.map((cattle, index) =>{
            return(
                    <table striped bordered hover size="sm" key= {index}>
                    <thead>
                        <tr>
                            <th>Cattle Id:</th>
                            <th>Batch Number:</th>
                            <th>Cost Per Unit</th>
                            <th>Expiry Date</th>
                            <th>Factory Destination</th>
                            <th>Factory Name</th>
                            <th>Meat Product Type</th>
                            <th>Package Date</th>
                            <th>Product Description</th>
                            <th>Product Weight</th> 
                            <th>Store Location</th> 
                            <th>Store Name</th>      
                            <th>Trace Number</th>  
                            <th>Trade Details</th>                  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cattle.cattle_id}</td>
                            <td>{cattle.btch_num}</td>
                            <td>{cattle.cost_pu}</td>
                            <td>{cattle.expr_date}</td>
                            <td>{cattle.fctry_dest}</td>
                            <td>{cattle.fctry_name}</td>
                            <td>{cattle.meat_prodtype}</td>
                            <td>{cattle.pkg_date}</td>
                            <td>{cattle.prod_descr}</td>
                            <td>{cattle.prod_weight}</td>
                            <td>{cattle.store_loc}</td>
                            <td>{cattle.store_name}</td>
                            <td>{cattle.trace_num}</td>
                            <td>{cattle.trace_dets}</td>
                        </tr>
                    </tbody>
                    </table>
            );
        })}
    </div>
    );

}

export default createInfo;