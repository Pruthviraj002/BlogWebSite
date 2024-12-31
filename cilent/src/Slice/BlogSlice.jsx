import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://blogbackend-lr56.onrender.com/api/blog"
export const getBlog = createAsyncThunk("blog/getBlog",async ()=>{
    try {
        const {data} = await axios.get(url)
        return data.data
    } catch (error) {
        return error.message
    }
})

export const createBlog = createAsyncThunk("blog/createBlog", async (blog)=>{
    try {
        const token  =localStorage.getItem("token")
        const {data} = await axios.post(url,blog,{headers:{"auth-token":token}})
        return data.data
    } catch (error) {
        return error.message
    }
})

const BlogSlice = createSlice({
    name: "blog",
    initialState:{
        data:[],
        isLoading:false,
        errorMessage:""
    },
    extraReducers:(builder)=>{
        builder.addCase(getBlog.pending,(state,{payload})=>{
            state.isLoading = true
        })
        builder.addCase(getBlog.rejected,(state,{payload})=>{
            state.isLoading = false
            state.errorMessage = payload
        })
        builder.addCase(getBlog.fulfilled,(state,{payload})=>{
            state.isLoading = false
            state.errorMessage = ""
            state.data = payload
        })
        builder.addCase(createBlog.pending,(state,{payload})=>{
            state.isLoading = true
        })
        builder.addCase(createBlog.rejected,(state,{payload})=>{
            state.isLoading = false 
            state.errorMessage = payload
        })
        builder.addCase(createBlog.fulfilled,(state,{payload})=>{
            state.isLoading = false
            state.data = state.data.concat(payload)
        })
    }

})

export default BlogSlice.reducer
