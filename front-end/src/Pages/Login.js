import React, { useState } from 'react';
import Layout from './Layout';
import "./Style/Login.scss";
import {useForm}from "react-hook-form"
import { login } from '../Actions/user-action';
import { useNavigate,Link } from 'react-router-dom';



const Login = () => {
    const naviate=useNavigate();
    const [errorSubmit, seterrorSubmit] = useState(String);
    const { register,formState:{errors},handleSubmit }=useForm({
        mode:"onChange",
        defaultValues:{
            email:"",
            password:""
        }
    })
    const onSubmitLogin=(data)=>{
        const loginData= login(data);
        loginData.then(res=>{
            if(res.id){
                naviate("/Accueille")
            }else{
                seterrorSubmit(res.message)
            }
        })
    }
    return (
        <div className='Login '>
            <Layout>
            <div className='Login-container'>
                <div className='Login-content bg-white'>
                    <h1>Login</h1>
                    <div className='errorSubmit'>
                        <span>{errorSubmit}</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmitLogin)}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input 
                                type={'email'}  
                                className="form-control"
                                placeholder='Email ...'
                                {...register("email",{
                                    required:{
                                        value:true,
                                        message:"input are  required"
                                    }
                                })}
                                />
                            <span className='errors errorsEmail'> {errors.email && errors.email.message}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type={'password'}
                                className="form-control"
                                placeholder='Passoword  ...'
                                {...register("password",{
                                    required:{
                                        value:true,
                                        message:"input are  required"
                                    }
                                })}
                                  />
                            <span className='errors errorsPassword'> {errors.password && errors.password.message}</span>
                        </div>
                        <button type={"submit"} className="btn btn-primary mt-2">Login</button>
                    </form>
                    <div className='footer-login'>
                        <span>Mot de passe oublie</span>
                        <span>if you don't have compte click <Link to={"/Signup"}>here</Link> </span>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    );
}

export default Login;
