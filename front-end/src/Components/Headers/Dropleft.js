import React from 'react';
import "./Styles/Dropleft.scss";
import {Link} from "react-router-dom"

const NavLink=(props)=>(
    <div className='body-link'>
        <Link to={props.link}>
            <span>{props.value}</span>
        </Link>
    </div>
)


const Dropleft = ({handleDropLeft}) => {
    return (
        <div className='Dropleft'>
            <div className='header'>
                <h3>Voyage </h3>
                <button type='button' onClick={handleDropLeft}>X</button>
            </div>
            <div className='body'>
                <NavLink link={"/"} value="Home" />
                <NavLink link={"/Accueille"} value="Accueille" />
                <NavLink link={"/Admin"} value="Admin" />
                <NavLink link={"/Aboute"} value="Aboute" />
                <NavLink link={"/Profil"} value="Profil" />
                <NavLink link={"/Signup"} value="Signup" />
            </div>
        </div>
    );
}

export default Dropleft;
