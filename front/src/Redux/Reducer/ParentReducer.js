import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Creation d'un Compte Admin
export const SignIn = createAsyncThunk('Parent/SignIn',(parent)=> {
    return axios
    .post('http://localhost:4000/Parent/signIn',parent)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

export const LogInParent = createAsyncThunk('Parent/LogIn',async(parent) => {
    return axios
    .post('http://localhost:4000/Parent/logIn',parent)
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(erreur => erreur.data.message)
})
const ParentSlice = createSlice({
    name : 'Parent',
    initialState : {
        parent : {},
        status : '',
        erreur : ''
    },
    reducers : {},
    extraReducers : {
        [SignIn.fulfilled] : (state,action) => {
            state.parent = action.payload
            state.status = 'Succés'
        },
        [SignIn.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [SignIn.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [LogInParent.fulfilled] : (state,action) => {
            if (typeof action.payload === 'string'){
                state.erreur = action.payload
                console.log(state.erreur)
                }
            else {
                state.parent = action.payload ;
                state.status = 'Succés' ;
                console.log(state.status)
                localStorage.setItem('parent',JSON.stringify(action.payload))
                console.log(localStorage.parent)
                }
        },
        [LogInParent.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [LogInParent.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export default ParentSlice.reducer