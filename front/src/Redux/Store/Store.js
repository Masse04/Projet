import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../Reducer/UserReducer'
import AdminReducer from '../Reducer/AdminReducer'
import EtudiantReducer from '../Reducer/EtudiantReducer'
import ParentReducer from '../Reducer/ParentReducer'
import ProfReducer from '../Reducer/ProfReducer'
import DocumentReducer from '../Reducer/DocumentReducer'
const Store = configureStore({
    reducer : {
        Etudiant : EtudiantReducer,
        Admin : AdminReducer,
        Parent : ParentReducer,
        Prof : ProfReducer,
        User : UserReducer,
        Document : DocumentReducer
    }
})
export default Store