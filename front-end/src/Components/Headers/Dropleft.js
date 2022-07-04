import React from 'react';
import "./Styles/Dropleft.scss";
import {Link} from "react-router-dom"
import {Menu} from "@mui/icons-material"


const Dropleft = ({handleDropLeft}) => {
    return (
        <div className='Dropleft'>
            <div className='header'>
                <h3>Voyage <Menu/></h3>
                <button type='button' onClick={handleDropLeft}>X</button>
            </div>
            <div className='body'>
                <div className='body-link'>
                <Link to="/">
                    <span>Home</span>
                </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Accueille">
                        <span>Accueille</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Admin">
                        <span>Admin</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Aboute">
                        <span>Aboute</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Profil">
                        <span>Profil</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Contact">
                        <span>Contact</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <Link to="/Signup">
                        <span>Signup</span>
                    </Link>
                </div>
                <div className='body-link'>
                    <span>Deconnexion</span>
                </div>
            </div>
        </div>
    );
}

export default Dropleft;
