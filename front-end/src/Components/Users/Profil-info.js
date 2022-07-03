import React from 'react';

const ProfilInfo = ({user,btnActive}) => {
    return (
        <div className='ProfilInfo'>
            <h1>user information</h1>
            <div className='ProfilInfo-content'>
                <ul>
                    <li>
                        Nom: {user.firstName}
                    </li>
                    <li>Prenom: {user.lastName}</li>
                    <li>Email: {user.email}</li>
                    <li>Role: {user.role}</li>
                    <li>createdAt: {user.createdAt}</li>
                </ul>
                <button type='button' onClick={()=>btnActive()} >update</button>
            </div>
        </div>
    );
}

export default ProfilInfo;
