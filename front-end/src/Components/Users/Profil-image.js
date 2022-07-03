import React from 'react';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../Actions/user-action';



const ProfilImage = ({user}) => {
    const dispatch=useDispatch();
    const {register,formState:{errors},handleSubmit}=useForm({
        image:null
    })

    const imageSubmit=async (data)=>{
        const formData=new FormData();
        formData.append("image",data.image[0])
        await dispatch(uploadImage(user._id,formData));
    }

    return (
        <div className='ProfilImage'>
            <div className='ProfilImage-content'>
                <img src={user.image} alt={user.firstName} />
            </div>
            <div className='ProfilImage-btn'>
                <form onSubmit={handleSubmit(imageSubmit)}>
                    <input 
                        type={"file"} 
                        {...register("image",{
                            required:{
                                value:true,
                                message:"Input is required"
                            }
                        })}
                    />
                    <span className="errorupload">{errors.image && errors.image.message}</span>
                    <button type='submit'>upload</button>
                </form>
            </div>
        </div>
    );
}

export default ProfilImage;
