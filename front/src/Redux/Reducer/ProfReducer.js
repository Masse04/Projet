import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignIn = createAsyncThunk('Prof/SignIn',async(prof)=> {
    return axios
    .post('http://localhost:4000/Prof/signIn',prof)
    .then(res => res.data)
    .catch(erreur => {
        console.log(erreur.data.message)
        return erreur.data.message})
})

export const LogInProf = createAsyncThunk('Prof/LogIn',async(prof) => {
    return axios
    .post('http://localhost:4000/Prof/logIn',prof)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})
const ProfSlice = createSlice({
    name : 'Prof',
    initialState : {
        prof : {},
        status : '',
        erreur : ''
    },
    reducers : {},
    extraReducers : {
        [SignIn.fulfilled] : (state,action) => {
            state.prof = action.payload
            state.status = 'Succés'
        },
        [SignIn.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [SignIn.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [LogInProf.fulfilled] : (state,action) => {
            if (typeof action.payload === 'string'){
                state.erreur = action.payload
                console.log(state.erreur)
                }
            else {
                state.prof = action.payload ;
                state.status = 'Succés' ;
                console.log(state.status)
                localStorage.setItem('prof',JSON.stringify(action.payload))
                console.log(localStorage.prof)
                }
        },
        [LogInProf.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [LogInProf.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})
export default ProfSlice.reducer