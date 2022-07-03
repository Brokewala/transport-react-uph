import React from 'react';
import {useForm} from "react-hook-form"

const ProfilUpdate = ({user,btnActive}) => {
    const {register,formState:{errors}} =useForm({
        defaultValues:{
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email
        }
    })
    return (
        <div className='ProfilUpdate'>
            <div className='ProfilUpdate-content'>
                <div className='ProfilUpdate-header'>
                    <button onClick={()=>btnActive()}>Back</button>
                    <h2>update user</h2>
                </div>
                <form>
                    <div className='field'>
                        <input 
                            type={"text"} 
                            placeholder="firstName" 
                            {...register('firstName',{
                                required:{
                                    value:true,
                                    message:"input is required"
                                }
                            })}
                            />
                        <span className='errorFirstName'></span>
                    </div>
                    <div className='field'>
                        <input 
                            type={"text"} 
                            placeholder="lastName" 
                            {...register('lastName',{
                                required:{
                                    value:true,
                                    message:"input is required"
                                }
                            })}
                            />
                        <span className='errorFirstName'></span>
                    </div>
                    <div className='field'>
                        <input type={"email"} 
                            placeholder="email ..." 
                            {...register('email',{
                                required:{
                                    value:true,
                                    message:"input is required"
                                }
                            })}
                            />
                        <span className='errorFirstName'></span>
                    </div>
                    <button type="submit">update</button>
                </form>
            </div>
        </div>
    );
}

export default ProfilUpdate;
