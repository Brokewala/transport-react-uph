import React, { useState } from 'react';
import "./Style/Admin.scss"
import Layout from './Layout';
import AdminNav from '../Components/Admin/AdminNav';
import AddVille from "../Components/Admin/Add-ville";
import AdminUser from '../Components/Admin/Admin-user';
import Regions from './Regions';

const Admin = () => {
    const [navAdmin, setNavAdmin] = useState("AdminRegions");//default nav AdminRegions

    // function pour ajoute les navigation dans l'etat
    const handleNav=(value)=>{
        setNavAdmin(value)
    }

    return (
        <Layout>
            <div className='Admin bg-white'>
                <div className='Admin-content'>
                    {/* navifation en function component */}
                    <AdminNav handleNav={handleNav}/>
                    <div className='Admin-body'>
                        {/* condition pour affichier region ,user ,add ville dans l'admin page  */}
                        {navAdmin==="AdminRegions" && <Regions/>}
                        {navAdmin==="AdminUser" && <AdminUser/>}
                        {navAdmin==="AddVille" && <AddVille/>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Admin;
