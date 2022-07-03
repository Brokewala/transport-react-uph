import React from 'react';
import { regions } from '../../Utils/cartes';
import "./Styles/RegionHeader.scss"


const RegionHeader = () => {
    return (
        <div className='RegionHeader'>
            <div className='RegionHeader-content'>
                <ul>
                    {
                        regions.map((ville,index)=><li key={index}>{ville.Ville}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default RegionHeader;
