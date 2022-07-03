const { createSlice } = require("@reduxjs/toolkit");

const initialState={}

const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state={...action.payload}
            return state;
        },
        updateUser:(state,action)=>{
            const newState=action.payload;
            state={...newState};
            return state;
        },
        deleteUser:(state,action)=>{},
    }
})

export const getUser=state=>state.users
export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;