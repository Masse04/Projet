import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../AxiosServices/AxiosServices";



export const CreateDocument = createAsyncThunk('Prof/Document',async(doc) => {
    return Axios
    .post('/Document/Upload',doc)
    .then(res => {console.log(res.data)
    return res.data})
    .catch(erreur => {
        console.log(erreur.data.message)
        return erreur.data.message})
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
        [CreateDocument.fulfilled] : (state,action) => {
            state.document = action.payload
            state.status = 'Succés'
            console.log(action.payload)
        },
        [CreateDocument.rejected] : (state,action) => {
            state.erreur = action.payload
            state.status = 'Rejeté'
            console.log(action.payload)
        },
        [CreateDocument.pending] : (state) => {
            state.status = 'En cours ...'
        }
    }
})

export default DocumentSlice.reducer