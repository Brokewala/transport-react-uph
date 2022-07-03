import React from 'react';
import "./Styles/RegionTable.scss"

const RegionTable = () => {
    return (
        <div className='RegionTable'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Phone</th>
                        <th>Destination</th>
                        <th>Paye</th>
                        <th>Reste</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>broke</td>
                        <td>wala</td>
                        <td>0322212916</td>
                        <td>Sambava</td>
                        <td>50000Ar</td>
                        <td>2000Ar</td>
                        <td>
                            <button className='btn btn-danger'>Delete</button>
                            <button  className='btn btn-info'>Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RegionTable;
