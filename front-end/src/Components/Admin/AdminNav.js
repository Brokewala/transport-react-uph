import React from 'react';
import "./styles/AdminNav.scss"

const AdminNav = ({handleNav}) => {
    return (
        <div className='AdminNav'>
            <div className='AdminNav-content'>
                <div className='AdminNav-header'>
                    <h2>Admin</h2>
                </div>
                <div className='AdminNav-body'>
                    <div className='AdminNav-link'>
                        <button type='button' onClick={()=>handleNav("AdminUser")}>
                            users
                        </button>
                    </div>
                    <div className='AdminNav-link'>
                        <button type='button' onClick={()=>handleNav("AdminRegions")}>
                            Regions
                        </button>
                    </div>
                    <div className='AdminNav-link'>
                        <button type='button' onClick={()=>handleNav("AddVille")}>
                            Add ville
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNav;
