import axios from "axios";
import { addUser, updateUser } from "../features/userSlice";


// const maxAgeAuth=3*24*60*60*1000;
const instance=axios.create({
    baseURL:"http://localhost:5000/api/users",
    withCredentials:true,
});

// interceptor
instance.interceptors.response.use(res=>{
    return res;
},async function(err){
    console.log("interceptors=>",err);
})

// signup action
export const signAction=async (data)=>{
    let message;
    await instance.post("/signup",data).then(res=>{
        message=res.data;
    }).catch(err=>{
        message="error 500 !"
    })
    return message;
}

// signin action
export const login=async (data)=>{
    let result;
    await instance.post("/login",data).then(res=>{
        result=res.data 
    })
    return result;
}

// get all user //admin
export const admin_getAlluser=async()=>{
    let data;
    await instance.get("/").then(res=>{
        data=res.data
    })
    return data;
}

// get one user
export const getOneUser=(id)=>{
    return (dispatch)=>{
        instance.get(`/${id}`).then(res=>{
            dispatch(addUser(res.data))
        })
    }
}

// upload image 
export const uploadImage=(id,image)=>{
    return (dispatch)=>{
        instance.put(`/imgUplaod/${id}`,image).then(res=>{
            dispatch(updateUser(res.data));
        })
    }
}