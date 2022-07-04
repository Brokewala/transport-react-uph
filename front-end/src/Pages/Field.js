import React, { useContext, useState } from 'react'
import { ajouteVoyage } from '../Actions/voyage-action';
import { AppContext } from '../App/AppContext'
import {useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { regions } from '../Utils/cartes';
import Layout from './Layout'
import "./Style/Field.scss"


export default function Field() {
    const [errorSubmit, setErrorSubmit] = useState(String);
    const navigate=useNavigate();
    const {region}=useContext(AppContext);
    const {register,formState:{errors},handleSubmit}=useForm({
        defaultValues:{
            firstName:"",
            lastName:"",
            phone:0,
            from:"",
            to:"",
            place:"",
            date:"",
            heur:"",
        }
    });

    const onSubmitField = (data) => {
        // vide l' etat de submit
        setErrorSubmit("")
        // si ville de depart n'est pas egale au ville de destination alors on continue sinon on afficher une message erreur
        if(data.from!==data.to){
            // date now
            const dayNow=new Date().getDate();//get jour
            const monthNow=new Date().getMonth();//get mois
            const YearNow=new Date().getFullYear();//get annees
            // date voyage
            const day=new Date(data.date).getDate();
            const month=new Date(data.date).getMonth();
            const year=new Date(data.date).getFullYear();

            // si la de depart de client est different de la date de condition
            // et la date est bien une date de present ou futur et n'est pas date dejat passe
            if(day<dayNow || month<monthNow || year<YearNow){
                return setErrorSubmit("Changer votre date de depart");
            }else{
                const result=ajouteVoyage(data);
                result.then(res=>{
                    // retourn message success
                    setErrorSubmit(res.message);
                    // redirect to voyage page
                    navigate("/Voyage")
                });
            }
        }else{
            setErrorSubmit("tu doit choisir une ville de destination ou ville de depart")
        }
    }
    
  return (
    <Layout>
        <div className='Field bg-white'>
            <div className='row'>
                <div className="col-md-12 ">
                    <h1>Voyage {region} </h1>
                    <div className="field-content">
                        <div className='errorsSubmit'>
                            <span> {errorSubmit} </span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitField)} >
                            <div className="form-group">
                                <label htmlFor='firstName'>Nom</label>
                                <input 
                                    type="text" 
                                    {...register("firstName",{
                                        required:{
                                            value:true,
                                            message:"firstName must be required"
                                        },
                                        minLength:{
                                            value:3,
                                            message:"firstName is sort",
                                        },
                                        
                                    })
                                    }   
                                    placeholder="firstName "
                                    className="form-control"
                                    />
                                    <span>{errors.firstName && errors.firstName.message}</span>
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
                                            message:"lastName mini size 3",
                                        },
                                        
                                    })
                                    }   
                                    placeholder="lastName"
                                    className="form-control"
                                    />
                                    <span>{errors.lastName && errors.lastName.message}</span>
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
                                            message:"phone number must be 10",
                                        },
                                        min:{
                                            value:10,
                                            message:"phone number must be 10min",
                                        }
                                        
                                    })
                                    }   
                                    placeholder="phone"
                                    className="form-control"
                                    />
                                    <span>{errors.phone && errors.phone.message}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='from'>From</label>
                                <select className='form-control' {...register("from",{
                                    required:{
                                        value:true,
                                        message:"selected one of theme"
                                    }
                                })}>
                                    {
                                        regions.map((des,index)=><option key={index} value={des.Ville} className="option">{des.Ville}</option>)
                                    }
                                </select>
                                <span>{errors.from && errors.from.message}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='to'>Destination</label>
                                <select className='form-control' {...register("to",{
                                    required:{
                                        value:true,
                                        message:"selected one of theme"
                                    }
                                })}>
                                    {
                                        regions.map((des,index)=><option key={index} value={des.Ville} className="option">{des.Ville}</option>)
                                    }
                                </select>
                                <span>{errors.to && errors.to.message}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='place'>Place</label>
                                <select defaultValue={"1 ere place"} className='form-control' {...register("place",{
                                    required:{
                                        value:true,
                                        message:"selected one of theme"
                                    }
                                })}>
                                    <option value={1}>1ere place ocupe!</option>
                                    <option value={2} >2ere place</option>
                                    <option value={3}>3ere place</option>
                                    <option value={4}>4ere place</option>
                                    <option value={5}>5ere place</option>
                                    <option value={6}>6ere place</option>
                                    <option value={7}>7ere place</option>
                                    <option value={8}>8ere place</option>
                                    <option value={9}>9ere place</option>
                                    <option value={10}>10ere place</option>
                                    <option value={11}>11ere place</option>
                                    <option value={12}>12ere place</option>
                                    <option value={13}>13ere place</option>
                                    <option value={14}>14ere place</option>
                                    <option value={15}>15ere place</option>
                                    <option value={16}>16ere place</option>
                                    <option value={17}>17ere place</option>
                                    <option value={18}>18ere place</option>
                                    <option value={19}>19ere place</option>
                                    <option value={20}>20ere place</option>
                                    <option value={21}>21ere place</option>
                                    <option value={22}>22ere place</option>
                                    <option value={23}>23ere place</option>
                                    <option value={24}>24ere place</option>
                                </select>
                                <span>{errors.place && errors.place.message}</span>
                            </div>
                            <div className='from-group'>
                                <label htmlFor='date'>Date</label>
                                <input type={"date"} className='form-control' {...register("date",{
                                    required:{
                                        value:true,
                                        message:"selection date de depart"
                                    }
                                })} />
                                <span>{errors.date && errors.date.message}</span>
                            </div>
                            <div className='from-group'>
                                <label htmlFor='heur'>Heur de depart</label>
                                <select className='form-control' defaultValue={"6h"} {...register("heur",{
                                    required:{
                                        value:true,
                                        message:"selection one of theme"
                                    }
                                })} >
                                    <option value={"6h"}>6h du matin</option>
                                    <option value={'8h'}>8h du matin</option>
                                    <option value={'10h'}>10h du matin</option>
                                    <option value={'14h'}>14h a pres midi</option>
                                    <option value={'16h'}>16h du soire</option>
                                    <option value={'20h'}>20h du soire</option>
                                    <option value={'22h'}>22h du soire</option>
                                </select>
                                <span>{errors.heur && errors.heur.message}</span>
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
