import axios from "axios"
import { AccountService } from "../AccountService.js/AccountService"


const Axios = axios.create({
    baseURL : 'http://localhost:4000'
})

//Axios.defaults.headers.common['Authorization'] = 'Bearer ' + AccountService.getToken()

Axios.interceptors.request.use(request => {
    if (AccountService.isLogged()){
        request.headers.Authorization = 'Bearer ' + AccountService.getToken()
    }
    console.log(request.headers)
    return request
}) 

export default Axios