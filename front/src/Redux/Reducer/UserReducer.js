import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../AxiosServices/AxiosServices";
import { AccountService } from "../../AccountService.js/AccountService";




// Creation d'un Compte User
export const SignIn = createAsyncThunk('User/SignIn',async(user) => {
    return Axios
    .post('/User/signIn',user)
    .then(res => res.data)
    .catch(erreur => {
        console.log(erreur.data.message)
        return erreur.data.message})
})
// Connexion d'un User
export const LogIn = createAsyncThunk('User/LogIn',async(user) => {
    return Axios
    .post('/User/logIn',user)
    .then(res => res.data)
    .catch(erreur => {
        console.log(erreur)
        return erreur.data.message})
})

const UserSlice = createSlice({
    name : 'User',
    initialState : {
        user : {},
        status : '',
        erreur : ''
    },
    reducers : {
        
        
    },
    extraReducers : {
        [SignIn.fulfilled] : (state,action) => {
            state.user = action.payload
            state.status = 'Succés'
        },
        [SignIn.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [SignIn.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [LogIn.fulfilled] : (state,action) => {
            if (typeof action.payload !== 'string'){
                state.user = action.payload ;
                console.log(action.payload)
                state.status = 'Succés' ;
                AccountService.saveToken( action.payload.access_token )
                }
        },
        [LogIn.rejected] : (state,action) => {
            state.erreur = action.payload
            console.log(action.payload)
            state.status = 'Rejeté'
        },
        [LogIn.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export default UserSlice.reducer