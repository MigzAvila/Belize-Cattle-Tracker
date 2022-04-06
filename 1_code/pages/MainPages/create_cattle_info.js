import { useState, useEffect } from "react";
import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";



function createInfo() {

    const [newCattleInfo, setNewCattleInfo] = useState({
    newCattleID: 0,
    newCattleAntbio: "",
    newCattleBreed: "",
    newCattleGender: "",
    newCattleWeight: "",
    newCattleDna: "",
    newCattleTag: "",
    newCattleFarmer: "",
    newCattleLocation: "",
    newCattleHissue: "",
    newCattleReartype: "",
    newCattleReproStat: "",

  });

    const apiService = require("../components/APIcalls/APIService");
    const [cattleInfo, setcattleInfo] = useState([]);
    const cattleInfoCollection = collection(db, "cattle_info");

    const createCattle = async () => {
        let status = await apiService.addNewCattle(newCattleInfo);
        console.log(status);
        if (status) {
          await addDoc(cattleInfoCollection, {cattle_id: newCattleInfo.newCattleID, antbio_type: newCattleInfo.newCattleAntbio, breed: newCattleInfo.newCattleBreed,
        gender: newCattleInfo.newCattleGender, cattle_weight: newCattleInfo.newCattleWeight, dna_type: newCattleInfo.newCattleDna, eartag_code: newCattleInfo.newCattleTag,
        farmer: newCattleInfo.newCattleFarmer, location: newCattleInfo.newCattleLocation, und_hlth_issues: newCattleInfo.newCattleHissue,
        rearing_type: newCattleInfo.newCattleReartype, repro_stat: newCattleInfo.newCattleReproStat    })
        }
    };
    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getCattleInfo = async () => {
            const data = await getDocs(cattleInfoCollection);
            setcattleInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getCattleInfo();
    }, [])

    return (
    <div className="createInfo">
        <input type="number" placeholder="Cattle id..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleID: e.target.value})} value={newCattleInfo.newCattleID} />
        <input placeholder="AntiBio..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleAntbio: e.target.value})} value={newCattleInfo.newCattleAntbio}/>
        <input placeholder="Breed..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleBreed: e.target.value})} value={newCattleInfo.newCattleBreed}/>
        <input placeholder="Gender..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleGender: e.target.value})} value={newCattleInfo.newCattleGender} />
        <input placeholder="Weight..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleWeight: e.target.value})} value={newCattleInfo.newCattleWeight}/>
        <input placeholder="DNA..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleDna: e.target.value})} value={newCattleInfo.newCattleDna}/>
        <input placeholder="Tag..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleTag: e.target.value})} value={newCattleInfo.newCattleTag}/>
        <input placeholder="Farmer..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleFarmer: e.target.value})} value={newCattleInfo.newCattleFarmer}/>
        <input placeholder="Location..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleLocation: e.target.value})} value={newCattleInfo.newCattleLocation}/>
        <input placeholder="Health Issue..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleHissue: e.target.value})} value={newCattleInfo.newCattleHissue}/>
        <input placeholder="Rearing Type..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleReartype: e.target.value})} value={newCattleInfo.newCattleReartype}/>
        <input placeholder="Rerpoduction Status..." onChange={(e) => setNewCattleInfo({...newCattleInfo, newCattleReproStat: e.target.value})} value={newCattleInfo.newCattleReproStat}/>
        

        <button onClick={createCattle}> Create Cattle</button>
        {cattleInfo.map((cattle, index) =>{
            return(
                    <table striped bordered hover size="sm" key= {index}>
                    <thead>
                        <tr>
                            <th>Cattle Id:</th>
                            <th>AntiBio:</th>
                            <th>Breed</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>DNA</th>
                            <th>Tag</th>
                            <th>Farmer</th>
                            <th>Location</th>
                            <th>Health Issue</th> 
                            <th>Rearing Type</th> 
                            <th>Reproduction Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cattle.cattle_id}</td>
                            <td>{cattle.antbio_type}</td>
                            <td>{cattle.breed}</td>
                            <td>{cattle.gender}</td>
                            <td>{cattle.cattle_weight}</td>
                            <td>{cattle.dna_type}</td>
                            <td>{cattle.eartag_code}</td>
                            <td>{cattle.farmer}</td>
                            <td>{cattle.location}</td>
                            <td>{cattle.und_hlth_issues}</td>
                            <td>{cattle.rearing_type}</td>
                            <td>{cattle.repro_stat}</td>
                        </tr>
                    </tbody>
                    </table>
            );
        })}
    </div>
    );

}

export default createInfo;