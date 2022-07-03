import React, { useContext, useEffect, useState } from 'react';
import { getOneUser } from '../Actions/user-action';
import { AppContext } from '../App/AppContext';
import ProfilImage from '../Components/Users/Profil-image';
import Layout from './Layout';
import "./Style/Profil.scss"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from '../features/userSlice';
import ProfilInfo from '../Components/Users/Profil-info';
import ProfilUpdate from '../Components/Users/Profil-update';


export default function Profil() {
    const [activeUpdate, setActiveUpdate] = useState(true);
    const {uid} = useContext(AppContext);
    const dispatch=useDispatch();
    const user=useSelector(getUser);

    // recuper all user
    useEffect(() => {
        const fetchData=async()=>{
            if(uid!==null){
                await dispatch(getOneUser(uid))
            }
        }
        fetchData();
    }, [uid,dispatch]);

    const btnActive=()=>{
        setActiveUpdate(!activeUpdate);
    }

    return (
        <Layout>
            <div className='Profil'>
                <div className='Profil-content'>
                    <div className='Profil-image-content'>
                        <ProfilImage user={user} />
                    </div>
                    <div className='Profil-info'>
                        {activeUpdate && <ProfilInfo user={user} btnActive={btnActive} />}
                        {!activeUpdate && <ProfilUpdate user={user} btnActive={btnActive} />}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

