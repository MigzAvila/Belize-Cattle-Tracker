import { useState, useEffect } from "react";
import {db} from '../../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";



function createInfo() {

    const [newProductInfo, setNewProductInfo] = useState(0);

    const apiService = require("../../components/APIcalls/APIService");
    const [result, setResult] = useState([1,2,3]);
    const [productInfo, setproductInfo] = useState([]);
    const [slaughter_info, setSlaughterInfo] = useState([]);
    const [cattleIinfo, setCattleInfo] = useState([]);
    const productInfoCollection = collection(db, "prodpack_info");
    const slgthrInfoCollection = collection(db, "slaughter_info");
    const cattleInfoCollection = collection(db, "cattle_info");

    const createProduct = async () => {
        let status = await apiService.addNewProduct(newProductInfo);
        console.log(status);
        if (status) {
            
        }
    };

    const filterResult = () => {
        let result = [];
        let product = [];
        let slaughter = [];
        let cattle = [];
        // slaughter = slaughterInfo.filter((slgthr) => { return slgthr.cattle_id === newProductInfo.newCattleID});
        // product = productInfo.filter((prod) => { return prod.cattle_id === newProductInfo.newCattleID});
        // cattle = cattleIinfo.filter((cattle) => { return cattle.cattle_id === newProductInfo.newCattleID});
        // result = [...product, ...slaughter, ...cattle];

        setResult(result);
    }

    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getProductInfo = async () => {
            const productInfo = await getDocs(productInfoCollection);
            const slaughter_info = await getDocs(slgthrInfoCollection);
            const cattle_info = await getDocs(cattleInfoCollection);
            // setproductInfo(productInfo.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // setSlaughterInfo(slaughter_info.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // setCattleInfo(cattle_info.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getProductInfo();
    }, [productInfo])

    return (
    <div className="createInfo">
        <input type="number" placeholder="Cattle id..." onChange={(e) => filterResult( e.target.value)} value={newProductInfo.newCattleID}/>

        <button onClick={createProduct}> Filter Result</button>

               
                    <table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Cattle Id:</th>
                        </tr>
                    </thead>
                    <tbody>
                             {result.map((result, index) =>(
                            <tr key={index}>
                                <td>{result}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
    </div>
    );

}

export default createInfo;