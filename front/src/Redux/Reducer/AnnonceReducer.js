import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../AxiosServices/AxiosServices";

// Création des Annonces

export const createAnnonces = createAsyncThunk('Annonce/Upload', async (ann) => {
    return Axios
    .post('/Annonce/upload',ann)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

// Affichage des Annonces

export const getAnnonces = createAsyncThunk('Annonce/Affichage',async () => {
    return Axios
    .get('/Annonce/affichage')
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

const AnnonceSlice = createSlice ({
    name : 'Annonce',
    initialState : {
        annonce : {} ,
        status : '',
        erreur : ''
    },
    reducers : {},
    extraReducers : {
        [createAnnonces.fulfilled] : (state,action) => {
            state.annonce = action.payload
            state.status = 'Success'
        },
        [createAnnonces.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [createAnnonces.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [getAnnonces.fulfilled] : (state,action) => {
            state.annonce = action.payload
            state.status = 'Success'
        },
        [getAnnonces.rejected] : (state,action) => {
            state.annonce = action.payload
            state.status = 'Rejeté'
        },
        [getAnnonces.pending] : (state) => {
            state.status = 'En cours ...'
        }

    }
})

export default AnnonceSlice.reducer