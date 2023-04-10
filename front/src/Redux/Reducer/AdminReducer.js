import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AccountService } from "../../AccountService.js/AccountService";

// Creation d'un Compte Admin
export const SignIn = createAsyncThunk('Admin/SignIn',async(admin) => {
    return axios
    .post('http://localhost:4000/Admin/signIn',admin)
    .then(res => res.data)
    .catch(erreur => {
        console.log(erreur.data.message)
        return erreur.data.message})
})
// Connexion d'un Admin
export const LogInAdmin = createAsyncThunk('Admin/LogIn',async(admin) => {
    return axios
    .post('http://localhost:4000/Admin/logIn',admin)
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(erreur => {
        console.log(erreur)
        return erreur.data.message})
})

const AdminSlice = createSlice({
    name : 'Admin',
    initialState : {
        admin : {},
        status : '',
        erreur : ''
    },
    reducers : {},
    extraReducers : {
        [SignIn.fulfilled] : (state,action) => {
            state.admin = action.payload
            state.status = 'Succés'
        },
        [SignIn.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [SignIn.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [LogInAdmin.fulfilled] : (state,action) => {
            if (!typeof action.payload === 'string'){
                state.admin = action.payload ;
                state.status = 'Succés' ;
                console.log(state.status)
                AccountService.saveToken( JSON.stringify(action.payload.access_token) )
                }
        },
        [LogInAdmin.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [LogInAdmin.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export const {logOut} = AdminSlice.actions
export default AdminSlice.reducer