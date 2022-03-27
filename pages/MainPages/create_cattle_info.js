import { useState, useEffect } from "react";
import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";



function createInfo() {

    const [newCattleID, setNewCattleID] = useState(0);
    const [newCattleAntbio, setNewCattleAntbio] = useState("");
    const [newCattleBreed, setNewCattleBreed] = useState("");
    const [newCattleGender, setNewCattleGender] = useState("");
    const [newCattleWeight, setNewCattleWeight] = useState("");
    const [newCattleDna, setNewCattleDna] = useState("");
    const [newCattleTag, setNewCattleTag] = useState("");
    const [newCattleFarmer, setNewCattleFarmer] = useState("");
    const [newCattleLocation, setNewCattleLocation] = useState("");
    const [newCattleHissue, setNewCattleHissue] = useState("");
    const [newCattleReartype, setNewCattleRearType] = useState("");
    const [newCattleReproStat, setNewCattleReproStat] = useState("");



    const [cattle_info, setCattleInfo] = useState([]);
    const cattleInfoCollection = collection(db, "cattle_info");

    const createCattle = async () => {
        await addDoc(cattleInfoCollection, {cattle_id: newCattleID, antbio_type: newCattleAntbio, breed: newCattleBreed,
        gender: newCattleGender, cattle_weight: newCattleWeight, dna_type: newCattleDna, eartag_code: newCattleTag,
        farmer: newCattleFarmer, location: newCattleLocation, und_hlth_issues: newCattleHissue,
        rearing_type: newCattleReartype, repro_stat: newCattleReproStat
    })
    };
    
    //use effect called whenever the page renders and gets the cattle info and displays
    useEffect(() =>{

        const getCattleInfo = async () => {
            const data = await getDocs(cattleInfoCollection);
            setCattleInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getCattleInfo();
    }, [])


    //this should display the collection of cattle_info information
    return (
    <div className="createInfo">
        <input type="number" placeholder="Cattle id..." onChange={(event) =>{
            setNewCattleID(event.target.value);
        }}/>
        <input placeholder="AntiBio..." onChange={(event) =>{
            setNewCattleAntbio(event.target.value);
        }}/>
        <input placeholder="Breed..." onChange={(event) =>{
            setNewCattleBreed(event.target.value);
        }}/>
        <input placeholder="Gender..." onChange={(event) =>{
            setNewCattleGender(event.target.value);
        }}/>
        <input placeholder="Weight..." onChange={(event) =>{
            setNewCattleWeight(event.target.value);
        }}/>
        <input placeholder="DNA..." onChange={(event) =>{
            setNewCattleDna(event.target.value);
        }}/>
        <input placeholder="Tag..." onChange={(event) =>{
            setNewCattleTag(event.target.value);
        }}/>
        <input placeholder="Farmer..." onChange={(event) =>{
            setNewCattleFarmer(event.target.value);
        }}/>
        <input placeholder="Location..." onChange={(event) =>{
            setNewCattleLocation(event.target.value);
        }}/>
        <input placeholder="Health Issue..." onChange={(event) =>{
            setNewCattleHissue(event.target.value);
        }}/>
        <input placeholder="Rearing Type..." onChange={(event) =>{
            setNewCattleRearType(event.target.value);
        }}/>
        <input placeholder="Rerpoduction Status..." onChange={(event) =>{
            setNewCattleReproStat(event.target.value);
        }}/>
        

        <button onClick={createCattle}> Create Cattle</button>
        {cattle_info.map((cattle) =>{
            return(
                    <table striped bordered hover size="sm">
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
                        </tr>
                    </tbody>
                    </table>
            );
        })}
    </div>
    );

}

export default createInfo;