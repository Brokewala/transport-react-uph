import React, { useState } from 'react';
import RegionTable from '../Components/Regions/Region-Table';
import RegionHeader from "../Components/Regions/Region-Header";

const Regions = () => {
    const [AdminVile, setAdminVile] = useState("");
    const handleVille=(value)=>{
        setAdminVile(value)
    }
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
