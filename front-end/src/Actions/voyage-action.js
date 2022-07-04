import axios from "axios";
import { addVoyage } from "../features/voyageSlice";

// configuration axios
const instance=axios.create({
    baseURL:"http://localhost:5000/api/voyage",
    withCredentials:true,
})

// ajoute voyage
export const ajouteVoyage=async(data)=>{
    let result;
    await instance.post("/addvoyage",data).then(res=>{
        result=res.data 
    })
    return result;
}

// afffichier all voyage liste 
export const getAllVoyageList=async()=>{
    let data;
    await instance.get("/").then(res=>{
        data=res.data
    })
    return data;
}