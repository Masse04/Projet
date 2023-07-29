import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../AxiosServices/AxiosServices";



export const createCours = createAsyncThunk('Prof/Cours',async(doc) => {
    return Axios
    .post('/Cours/upload',doc)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

export const getCours = createAsyncThunk('Prof/Cours', async()=> {
    return Axios
    .get('/Cours/afficherDocs')
    .then( res => res.data)
    .catch(error => error.data.message)
})
const CoursSlice = createSlice({
    name : 'Cour',
    initialState : {
        cour : {},
        status : '',
        erreur : ''
    },
    reducers : {
        
        
    },
    extraReducers : {
        [createCours.fulfilled] : (state,action) => {
            state.cour = action.payload
            state.status = 'Succés'
        },
        [createCours.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [createCours.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [getCours.fulfilled] : (state,action) => {
            state.cour = action.payload
            state.status = 'Succés'
        },
        [getCours.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
        },
        [getCours.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export default CoursSlice.reducer