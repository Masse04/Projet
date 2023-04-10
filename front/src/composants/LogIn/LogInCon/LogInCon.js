import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Connexion } from "../../../Class/Class"
import { LogInAdmin } from "../../../Redux/Reducer/AdminReducer"
import { LogInEtudiant } from "../../../Redux/Reducer/EtudiantReducer"
import { LogInParent } from "../../../Redux/Reducer/ParentReducer"
import { LogInProf } from "../../../Redux/Reducer/ProfReducer"

const LogInCon = ({lier}) => {
    const [user,setUser] = useState(new Connexion())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Redirect = async() => {
        /* if (lier === 'Admin'){
            let result = await dispatch(LogInAdmin(user))
            if(typeof result.payload === 'object')
            navigate(`/${lier}/connexion`)
        }else if (lier === 'Etudiant'){
            let result = await dispatch(LogInEtudiant(user))
            if(typeof result.payload === 'object')
            navigate(`/${lier}/connexion`)
        }else if (lier === 'Prof'){
            let result = await dispatch(LogInProf(user))
            if(typeof result.payload === 'object')
            navigate(`/${lier}/connexion`)
        }else if (lier === 'Parent'){
            let result = await dispatch(LogInParent(user))
            if(typeof result.payload === 'object')
            navigate(`/${lier}/connexion`)
        } */
      }
      const onChange = (e) => {
        setUser({...user,
          [e.target.name] : e.target.value
        })
      }
  return (
    <div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input type="text" className="form-control" name = 'username' id="floatingInputGroup1" placeholder="Username" required onChange={onChange}/>
            <label>Username</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input type="password" className="form-control" name = 'password' id="floatingInputGroup" placeholder="*********" required onChange={onChange}/>
            <label>Password</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={Redirect}>LogIn</button>
        </div>
    </div>
  )
}

export default LogInCon