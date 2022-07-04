import React, { useState } from 'react';
import RegionTable from '../Components/Regions/Region-Table';
import RegionHeader from "../Components/Regions/Region-Header";
import { getAllVoyageList } from '../Actions/voyage-action';
import {useDispatch} from "react-redux";

const Regions = () => {
    // const [AdminVile, setAdminVile] = useState("");
    const [voyages, setVoyages] = useState(null);
    const handleVille=(value)=>{
        setAdminVile(value)
    }

    useEffect(() => {
        return () => {
            cleanup
        };
    }, [voyages,setVoyages]);
    return (
        <div className='Regions'>
            <div className='Regions-content'>
                <h2>liste de voyageS</h2>
                <div className='Regions-header'>
                    <RegionHeader handleVille={handleVille} />
                </div>
                <div className='Regions-body'>
                    <RegionTable/>
                </div>
            </div>
        </div>
    );
}

export default Regions;
