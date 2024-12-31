import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://blogbackend-lr56.onrender.com/api/user"

export const login = createAsyncThunk("user/login", async (user, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${url}/login`, user)
        return data.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
})


export const register = createAsyncThunk("user/register",async (user,)=>{
    try {
        const {data} = await axios.post(url,user)
        return data.data
    } catch (error) {
        return error.message
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        data:[],
        isLoading:false,
        errorMessage:"",
        user:{}
    },
    reducers:{
        logout:(state,{payload})=>{
            localStorage.clear()
            state.user = {}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state,{payload})=>{
            state.isLoading = true
        })
        builder.addCase(login.rejected,(state,{payload})=>{
            state.isLoading = false
            state.errorMessage = payload
        })
        builder.addCase(login.fulfilled,(state,{payload})=>{
            state.isLoading = false
           if (payload.token) {
               state.user.token = payload.token
               state.user.user = payload.user
               localStorage.setItem("token", payload.token)
           } else {
               state.errorMessage = payload
               state.user = {}

           }
        })
        //!Register
        builder.addCase(register.pending,(state,{payload})=>{
            state.isLoading = true
        })
        builder.addCase(register.rejected,(state,{payload})=>{
            state.isLoading = false
            state.errorMessage = payload
        })
        builder.addCase(register.fulfilled,(state,{payload})=>{
            state.isLoading = false
            state.errorMessage = ""
            state.date = state.date.concat(payload)

        })
    }
})

export default userSlice.reducer
export const {logout} = userSlice.actions