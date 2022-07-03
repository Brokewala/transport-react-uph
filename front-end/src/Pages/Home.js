import React, { useContext } from 'react'
import { regions} from '../Utils/cartes';
import "./Style/Home.scss";
import Layout from './Layout';
import {useNavigate} from "react-router-dom"
import { AppContext } from '../App/AppContext';

export default function Home() {
  const navigate=useNavigate();
  const {setRegion}=useContext(AppContext);
  

  const handleReserver=(value)=>{
    setRegion(value);
    navigate("/Field")
  }

    return(
    <Layout>
      <div className="Home">
          <div className=" Home-content">{
            regions.map((carte, index) =>(
              <div  key = {index} className="">
                <div className="card">
                  <div className="card-title text-center">
                    <h5 >{carte.Ville}</h5>
                  </div>
                  <hr className='line'/>
                  <div className="card-body">
                    <img src={carte.imageUrl} className="image" alt="..."/>
                    <p className="card-text">Description: {carte.description}</p>
                  </div>
                  <div className="card-footer">
                    <span>Prix: {carte.prix} Ariary</span>
                    <button type='button' onClick={()=>handleReserver(carte.Ville)} className="btn btn-primary">Reserver</button>
                  </div>
              </div>
              </div>
            ))}
          </div>
      </div>
    </Layout>  
    )
}

