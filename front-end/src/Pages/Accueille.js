import React from 'react';
import AccueilleNav from '../Components/Accueilles/Accueille-Nav';
import Layout from './Layout';
import "./Style/Accueille.scss";
import Regions from "./Regions";

const Accueille = () => {
    return (
        <Layout>
            <div className='Accueille bg-white'>
                <div className='Accueille-content'>
                    <AccueilleNav/>
                    <div className='Accueille-body'>
                        <Regions/>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default Accueille;
