const { createSlice } = require("@reduxjs/toolkit");

const initialState={}

const voyageSlice=createSlice({
    name:"voyage",
    initialState,
    reducers:{
        addVoyage:(state,action)=>{
            console.log(action.payload);
        }
    }
})

export const getVoyage=state=>state.voyage
export const {addVoyage}=voyageSlice.actions
export default voyageSlice.reducer;