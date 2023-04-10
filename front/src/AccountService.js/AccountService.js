


// Sauvegarde du token dans le LocalStorage
let saveToken = (token) => {
    localStorage.setItem('token',token)
}

// Déconnexion du User
let logOut = (navigate) => {
    localStorage.removeItem('token')
    navigate('/User/LogIn')
}

// Vérification de connexion
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

// Récupération du token
let getToken = () => {
    let token = localStorage.getItem('token')
    return token
}
export const AccountService = { saveToken, logOut, isLogged, getToken}