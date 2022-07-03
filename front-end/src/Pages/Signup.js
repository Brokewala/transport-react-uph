import React, { useState } from 'react';
import Layout from './Layout';
import "./Style/Signup.scss"
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signAction } from '../Actions/user-action';


const Signup = () => {
    const navigate=useNavigate();
    const [trueVal, setTrueVal] = useState("");
    const { register,formState:{errors,isValid},handleSubmit }=useForm({
        mode:"onChange",
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
    })

    const onSubmitSignup=(data)=>{
        document.querySelector("#errorSubmit").className="";
        if(
            parseInt(data.firstName.length)!==0 &&
            parseInt(data.lastName.length)!==0 &&
            parseInt(data.email.length)!==0 &&
            parseInt(data.password.length)!==0
        ){
            setTrueVal("")
            if(isValid){
                setTrueVal("")
                const dataSignup=signAction(data);
                dataSignup.then((value)=>{
                    // sigup existe
                    if(value.errorSignup){
                        document.querySelector("#errorSubmit").className="errorSubmit";
                        const error=value.errorSignup;
                        if(error.firstName!==""){
                            setTrueVal(error.firstName);
                        }else if(error.lastName!==""){
                            setTrueVal(error.lastName);
                        }else if(error.email!==""){
                            setTrueVal(error.email);
                        }
                    }else{
                        setTrueVal(value.message);
                        document.querySelector("#errorSubmit").className="successSubmit";
                        navigate("/login")
                    }
                })
            }else{
                document.querySelector("#errorSubmit").className="errorSubmit";
                setTrueVal("All input are required")
            }
        }else{
            document.querySelector("#errorSubmit").className="errorSubmit";
            setTrueVal("All input are required")
        }
    }
    return (
        <Layout>
            <div className='Signup bg-white'>
                <div className='Signup-content'>
                    <div id='errorSubmit'>
                        <span className='errorSubmitValue'>{trueVal}</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmitSignup)}>
                        <div className='form-group'>
                            <label>Nom</label>
                            <input 
                                type={"text"} 
                                placeholder="Enter your firstName" 
                                className='form-control'
                                {...register("firstName",{
                                    minLength:{
                                        value:3,
                                        message:"firstName is very sorte"
                                    },
                                    required:{
                                        value:true,
                                        message:"input are required"
                                    },
                                })}
                                />
                            <span id="errorFirstName" className='errors'> { errors.firstName && errors.firstName.message} </span>
                        </div>
                        <div className='form-group'>
                            <label>Prenom</label>
                            <input 
                                type={"text"} 
                                placeholder="Enter your lastname" 
                                className='form-control'
                                {...register("lastName",{
                                    minLength:{
                                        value:3,
                                        message:"lastName is very sorte"
                                    },
                                    required:{
                                        value:true,
                                        message:"input are required"
                                    }
                                })}
                                />
                            <span id="errorFirstName" className='errors'> { errors.lastName && errors.lastName.message} </span>
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input 
                                type={"Email"} 
                                placeholder="Enter your email" 
                                className='form-control'
                                {...register("email",{
                                    required:{
                                        value:true,
                                        message:"input are required"
                                    }
                                })}
                                />
                            <span id="errorFirstName" className='errors'> { errors.email && errors.email.message} </span>
                        </div>
                        <div className='form-group'>
                            <label>Mot de passe</label>
                            <input 
                                type={"password"} 
                                placeholder="Enter your password" 
                                className='form-control' 
                                {...register("password",{
                                    minLength:{
                                        value:4,
                                        message:"password mini size 4"
                                    },
                                    required:{
                                        value:true,
                                        message:"input are required"
                                    }
                                })}
                                />
                            <span id="errorFirstName" className='errors'> { errors.password && errors.password.message} </span>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Sign up</button>
                        
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Signup;
