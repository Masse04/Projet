import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../AxiosServices/AxiosServices";



export const createDocument = createAsyncThunk('Prof/Document',async(doc) => {
    return Axios
    .post('/Document/Upload',doc)
    .then(res => res.data)
    .catch(erreur => erreur.data.message)
})

export const getDocument = createAsyncThunk('Prof/Document', async()=> {
    return Axios
    .get('/Document/afficherDocs')
    .then( res => { console.log(res.data)
    return res.data})
    .catch(error => { console.log(error.data.message)
    return error.data.message})
})
const DocumentSlice = createSlice({
    name : 'Document',
    initialState : {
        document : {},
        status : '',
        erreur : ''
    },
    reducers : {
        
        
    },
    extraReducers : {
        [createDocument.fulfilled] : (state,action) => {
            state.document = action.payload
            state.status = 'Succés'
            console.log(action.payload)
        },
        [createDocument.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
            console.log(action.payload)
        },
        [createDocument.pending] : (state) => {
            state.status = 'En cours ...'
        },
        [getDocument.fulfilled] : (state,action) => {
            state.document = action.payload
            state.status = 'Succés'
            console.log(action.payload)
        },
        [getDocument.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
            console.log(action.payload)
        },
        [getDocument.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export default DocumentSlice.reducer