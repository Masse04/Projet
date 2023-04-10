import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// Creation d'un Compte Etudiant
export const SignIn = createAsyncThunk('Etudiant/SignIn',async(etudiant) => {
    return axios
    .post('http://localhost:4000/Etudiant/signIn',etudiant)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

export const LogInEtudiant = createAsyncThunk('Etudiant/LogIn',async(etudiant) => {
    
    return axios
    .post('http://localhost:4000/Etudiant/logIn',etudiant)
    .then(res => {
        console.log(res)
        return res.data
        })
    .catch(erreur => {
        console.log(erreur)
        return erreur.data.message
    })
})
const EtudiantSlice = createSlice({
    name : 'Etudiant',
    initialState : {
        etudiant : {},
        status : '',
        erreur : ''
    },
    reducers : {},
    extraReducers : {
        [SignIn.fulfilled] : (state,action) => {
            state.etudiant = action.payload
            state.status = 'Succés'
        },
        [SignIn.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [SignIn.pending] : (state) => {
            state.status = 'en cours ...'
        },
        [LogInEtudiant.fulfilled] : (state,action) => {
            if (!typeof action.payload === 'string'){
                state.etudiant = action.payload ;
                state.status = 'Succés' ;
                console.log(state.status)
                localStorage.setItem('etudiant',JSON.stringify(action.payload))
                console.log(localStorage.etudiant)
                }
        },
        [LogInEtudiant.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
            console.log(state.erreur)
        },
        [LogInEtudiant.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }

})

export default EtudiantSlice.reducer