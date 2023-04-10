import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Users } from "../../Class/Class"
import { SignIn } from "../../Redux/Reducer/UserReducer"


const SignInUser = () => {
    const [user,setUser] = useState(new Users())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Redirect = async() => {
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
    <div>
        <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" name = 'nom' placeholder="Last name" aria-label="Last name" onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" name = 'prenom' placeholder="First name" aria-label="First name" onChange={onChange}/>
                </div>
            <div className="col-md-6">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputUsername" name = 'username' placeholder='Username' onChange={onChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label"></label>
                <input type="password" className="form-control" id="inputPassword4" name = 'password' placeholder='Password' onChange={onChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="inputEmail4" name = 'email' placeholder='Email' onChange={onChange}/>
            </div>
            <div className="col-6">
                <label className="form-label"></label>
                <input type="tel" className="form-control" id="inputTelephone" name = 'telephone' placeholder="Telephone" onChange={onChange}/>
            </div>
            <div className="col-6">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputAddress" name = 'adresse' placeholder="Adresse" onChange={onChange}/>
            </div>
            <div className="col-md-2">
                <label className="form-label"></label>
                <select id="inputSexe" className="form-select" name = 'sexe' onClick={onChange}>
                <option>Sexe</option>
                <option>M</option>
                <option>F</option>
                </select>
            </div>
            <div className="col-md-4">
                <label className="form-label"></label>
                <input type="text" className="form-control" id="inputCin" name="cin" placeholder="CIN" onChange={onChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label"></label>
                <select id="inputSexe" className="form-select" name="role" onClick={onChange}>
                <option>Admin</option>
                <option>Prof</option>
                <option>Parent</option>
                <option>Etudiant</option>
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label"></label>
                <input type="date" className="form-control" id="inputBirthday" name="birthday" placeholder="Date de Naissance" onChange={onChange}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={Redirect}>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default SignInUser