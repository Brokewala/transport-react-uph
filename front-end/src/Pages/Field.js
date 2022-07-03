import React, { useContext, useState } from 'react'
import { AppContext } from '../App/AppContext'
import Layout from './Layout'
import { useForm } from 'react-hook-form';
// import {useNavigate} from "react-router-dom"
import "./Style/Field.scss"
import { regions } from '../Utils/cartes';

export default function Field() {
    // const navigate=useNavigate();
    const {region}=useContext(AppContext);
    const {register,formState:{errors},handleSubmit}=useForm({
        defaultValues:{
            ville:region,
            name:"",
            lastName:"",
            phone:0
        }
    });

    const onSubmitField = (data) => {
        console.log(data);
    }
    
  return (
    <Layout>
        <div className='Field bg-white'>
            <div className='row'>
                <div className="col-md-12 ">
                    <h1>Voyage {region} </h1>
                    <div className="field-content">
                        <form onSubmit={handleSubmit(onSubmitField)} >
                            <div className="form-group">
                                <label htmlFor='name'>Nom</label>
                                <input 
                                    type="text" 
                                    {...register("name",{
                                        required:{
                                            value:true,
                                            message:"Name must be required"
                                        },
                                        minLength:{
                                            value:3,
                                            message:"Name is sort",
                                        },
                                        
                                    })
                                    }   
                                    placeholder="lastName"
                                    className="form-control"
                                    />
                                    <span>{errors.name&&errors.name.message}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor='lastname'>Prenom</label>
                                <input 
                                    type="text" 
                                    {...register("lastName",{
                                        required:{
                                            value:true,
                                            message:"lastName must be required"
                                        },
                                        minLength:{
                                            value:3,
                                            message:"lastName is sort",
                                        },
                                        
                                    })
                                    }   
                                    placeholder="lastName"
                                    className="form-control"
                                    />
                                    <span>{errors.lastName&&errors.lastName.message}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Téléphone</label>
                                <input 
                                    type="number" 
                                    {...register("phone",{
                                        required:{
                                            value:true,
                                            message:"phone must be required"
                                        },
                                        minLength:{
                                            value:10,
                                            message:"phone is sort",
                                        },
                                        
                                    })
                                    }   
                                    placeholder="phone"
                                    className="form-control"
                                    />
                                    <span>{errors.phone&&errors.phone.message}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='destination'>Destination</label>
                                <select className='form-control'>
                                    {
                                        regions.map((des,index)=><option key={index} value={des.Ville} className="option">{des.Ville}</option>)
                                    }
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='place'>Place</label>
                                <select className='form-control'>
                                    <option>1ere place ocupe!</option>
                                    <option>2ere place</option>
                                    <option>3ere place</option>
                                    <option>3ere place</option>
                                    <option>4ere place</option>
                                    <option>5ere place</option>
                                    <option>6ere place</option>
                                    <option>7ere place</option>
                                    <option>8ere place</option>
                                    <option>9ere place</option>
                                    <option>10ere place</option>
                                    <option>11ere place</option>
                                    <option>12ere place</option>
                                    <option>13ere place</option>
                                    <option>14ere place</option>
                                    <option>15ere place</option>
                                    <option>16ere place</option>
                                    <option>17ere place</option>
                                    <option>18ere place</option>
                                    <option>19ere place</option>
                                    <option>20ere place</option>
                                    <option>21ere place</option>
                                    <option>22ere place</option>
                                    <option>23ere place</option>
                                    <option>24ere place</option>
                                </select>
                            </div>
                            <div className='from-group'>
                                <label>Date</label>
                                <input type={"date"} className='form-control' />
                            </div>
                            <div className='from-group'>
                                <label>Heur de depart</label>
                                <select className='form-control' >
                                    <option>6h du matin</option>
                                    <option>8h du matin</option>
                                    <option>10h du matin</option>
                                    <option>14h a pres midi</option>
                                    <option>16h du soire</option>
                                    <option>20h du soire</option>
                                    <option>22h du soire</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>  
  )
}
