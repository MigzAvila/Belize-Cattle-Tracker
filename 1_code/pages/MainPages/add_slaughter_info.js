import { useState, useEffect } from "react";
import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";


// Initializing slaughterInfo
function createSlgthrInfo() {

    const [newSlgthrInfo, setNewSlgthrInfo] = useState({
    newCattleID: 0,
    newFctryDest: "",
    newFctryName: "",
    newSlghtrDate: "",
    newSlgthrMtd:"",
    newTraceNum:""

  });

    const apiService = require("../components/APIcalls/APIService");
    const [slgthrInfo, setslghtrInfo] = useState([]);
    const slgthrInfoCollection = collection(db, "slaughter_info");

    const createSlghtr = async () => {
        let status = await apiService.addNewSlaughter(newSlgthrInfo);
        console.log(status);
        if (status) {
          await addDoc(slgthrInfoCollection, {cattle_id: newSlgthrInfo.newCattleID, fctry_dest: newSlgthrInfo.newFctryDest, fctry_name: newSlgthrInfo.newFctryName, slgthr_date: newSlgthrInfo.newSlghtrDate, slgthr_mtd: newSlgthrInfo.newSlgthrMtd, trace_num: newSlgthrInfo.newTraceNum})
        }
    };
    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getSlgthrInfo = async () => {
            const data = await getDocs(slgthrInfoCollection);
            setslghtrInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getSlgthrInfo();
    }, [])

    return (
    <div className="createSlgthrInfo">
        <input type="number" placeholder="Cattle id..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newCattleID: e.target.value})} value={newSlgthrInfo.newCattleID} />
        <input placeholder="Factory Destination..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newFctryDest: e.target.value})} value={newSlgthrInfo.newFctryDest}/>
        <input placeholder="Factory Name..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newFctryName: e.target.value})} value={newSlgthrInfo.newFctryName}/>
        <input placeholder="Slaughter Date..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newSlghtrDate: e.target.value})} value={newSlgthrInfo.newSlghtrDate}/>
        <input placeholder="Slaughter Method..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newSlgthrMtd: e.target.value})} value={newSlgthrInfo.newSlgthrMtd}/>
        <input placeholder="Taceability Number..." onChange={(e) => setNewSlgthrInfo({...newSlgthrInfo, newTraceNum: e.target.value})} value={newSlgthrInfo.newTraceNum}/>

        <button onClick={createSlghtr}> Add Slaughter Info</button>
        {slgthrInfo.map((slgthr, index) =>{
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
                            <td>{slgthr.cattle_id}</td>
                            <td>{slgthr.fctry_dest}</td>
                            <td>{slgthr.fctry_name}</td>
                            <td>{slgthr.slgthr_date}</td>
                            <td>{slgthr.slgthr_mtd}</td>
                            <td>{slgthr.trace_num}</td>

                        </tr>
                    </tbody>
                    </table>
            );
        })}
    </div>
    );

}

export default createSlgthrInfo;