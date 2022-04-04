import { useState, useEffect } from "react";
import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";



function createSlgthrInfo() {

    const [newSlghtrInfo, setNewCattleInfo] = useState({
    newCattleID: 0,
    newFctryDest: "",
    newFctryName: "",
    newSlghtrDate: "",
    newSlgthrMtd:"",
    newTraceNum:""

  });

    const apiService = require("../components/APIcalls/APIService");
    const [cattleInfo, setSlghtrInfo] = useState([]);
    const cattleInfoCollection = collection(db, "slaughter_info");

    const createSlghtr = async () => {
        let status = await apiService.addNewCattle(newSlghtrInfo);
        console.log(status);
        if (status) {
          await addDoc(cattleInfoCollection, {cattle_id: newCattleInfo.newCattleID, fctry_dest: newCattleInfo.newFctryDest, fctry_name: newCattleInfo.newFctryName, slgthr_date: newCattleInfo.newSlghtrDate, slgthr_mtd: newCattleInfo.newSlgthrMtd, trace_num: newCattleInfo.newTraceNum   })
        }
    };
    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getSlgthrInfo = async () => {
            const data = await getDocs(cattleInfoCollection);
            setSlgthrInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getSlgthrInfo();
    }, [])

    return (
    <div className="createSlgthrInfo">
        <input type="number" placeholder="Cattle id..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleID: e.target.value})} value={newCattleInfo.newCattleID} />
        <input placeholder="Factory Destination..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newFctryDest: e.target.value})} value={newCattleInfo.newFctryDest}/>
        <input placeholder="Factory Name..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newFctryName: e.target.value})} value={newCattleInfo.newFctryName}/>
        <input placeholder="Slaughter Date..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newSlgthrDate: e.target.value})} value={newCattleInfo.newSlgthrDate}/>
        <input placeholder="Slaughter Method..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newSlgthrMethod: e.target.value})} value={newCattleInfo.newSlgthrMethod}/>
        <input placeholder="Taceability Number..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newTraceNum: e.target.value})} value={newCattleInfo.newTraceNum}/>

        <button onClick={createCattle}> Add Slaughter Info</button>
        {cattleInfo.map((cattle, index) =>{
            return(
                    <table striped bordered hover size="sm" key= {index}>
                    <thead>
                        <tr>
                            <th>Cattle Id:</th>       
                            <th>Factory Destination</th>      
                            <th>Factory Name</th>      
                            <th>Slaughter Date</th>      
                            <th>Slaughter Method</th>                    
                            <th>Traceability Number</th>                     

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cattle.cattle_id}</td>
                            <td>{cattle.fctry_dest}</td>
                            <td>{cattle.fctry_name}</td>
                            <td>{cattle.slghtr_date}</td>
                            <td>{cattle.slgthr_mtd}</td>
                            <td>{cattle.trace_num}</td>

                        </tr>
                    </tbody>
                    </table>
            );
        })}
    </div>
    );

}

export default createSlgthrInfo;