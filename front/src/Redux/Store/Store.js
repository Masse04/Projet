import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../Reducer/UserReducer'
import CourReducer from '../Reducer/CourReducer'
import AnnonceReducer from '../Reducer/AnnonceReducer'
const Store = configureStore({
    reducer : {
        User : UserReducer,
        Cour : CourReducer,
        Annonce : AnnonceReducer
    }
})
export default Store