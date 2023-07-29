import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Users } from "../../Class/Class"
import { SignIn } from "../../Redux/Reducer/UserReducer"
import './signInUser.css'


const SignInUser = () => {
    const [user,setUser] = useState(new Users())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = async(e) => {
        e.preventDefault()
        let result = await dispatch(SignIn(user))
        const nav = result.meta.arg.role
        if (typeof result.payload === 'object')
            navigate(`/${nav}/connexion`)
    }
    const onChange = (e) => {
        setUser({...user,
            [e.target.name] : e.target.value
        })
    }
    
  return (
    <div className="signInUser">
        <form onSubmit={onSubmit}>
            <div className="lastName">
                <label className="form-label"></label>
                <input type="text" className="form-control" name = 'nom' placeholder="Last name" aria-label="Last name" onChange={onChange}/>
            </div>
            <div className="firstName">
                <label className="form-label"></label>
                <input type="text" className="form-control" name = 'prenom' placeholder="First name" aria-label="First name" onChange={onChange}/>
            </div>
            <div className="username">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputUsername" name = 'username' placeholder='Username' onChange={onChange}/>
            </div>
            <div className="password">
                <label className="form-label"></label>
                <input type="password" className="form-control" id="inputPassword4" name = 'password' placeholder='Password' onChange={onChange}/>
            </div>
            <div className="email">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="inputEmail4" name = 'email' placeholder='Email' onChange={onChange}/>
            </div>
            <div className="tel">
                <label className="form-label"></label>
                <input type="tel" className="form-control" id="inputTelephone" name = 'telephone' placeholder="Telephone" onChange={onChange}/>
            </div>
            <div className="adresse">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputAddress" name = 'adresse' placeholder="Adresse" onChange={onChange}/>
            </div>
            <div className="sexe">
                <label className="form-label"></label>
                <select id="inputSexe" className="form-select" name = 'sexe' onClick={onChange}>
                <option>Sexe</option>
                <option>M</option>
                <option>F</option>
                </select>
            </div>
            <div className="cin">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputCin" name="cin" placeholder="CIN" onChange={onChange}/>
            </div>
            <div className="role">
                <label className="form-label"></label>
                <select id="inputRole" className="form-select" name="role" onClick={onChange}>
                    <option>Admin</option>
                    <option>Prof</option>
                    <option>Parent</option>
                    <option>Etudiant</option>
                </select>
            </div>
            <div className="classe">
                <label className="form-label"></label>
                <select id="inputClasse" className="form-select" name="classe" onClick={onChange}>
                    <option >Classe : Uniquement pour les Etudiants</option>
                    <option value='Seconde'>Seconde</option>
                    <option value='Premiere'>Premiere</option>
                    <option value='Terminale'>Terminale</option>
                </select>
            </div>
            <div className="birth">
                <label className="form-label"></label>
                <input type="date" className="form-control" id="inputBirthday" name="birthday" placeholder="Date de Naissance" onChange={onChange}/>
            </div>
            <div className="button">
                <button type="submit" className="btn btn-primary">SignIn</button>
            </div>
        </form>
        <Link to='/User/logIn'><p>LogIn</p></Link>
    </div>
  )
}

export default SignInUser