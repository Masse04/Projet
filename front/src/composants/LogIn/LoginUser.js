import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Connexion } from "../../Class/Class";
import { LogIn } from "../../Redux/Reducer/UserReducer";


const LoginUser = () => {
    const [user,setUser] = useState(new Connexion())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onChange = (e) => {
        setUser({...user,
          [e.target.name] : e.target.value
        })
      }
    const Redirect = async() => {
        let result = await dispatch(LogIn(user))
        const nav = result.payload.role
        if(typeof result === 'object')        
        navigate(`/${nav}/connexion`)
    }
    return (
        <div className="LoginUser">
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
    );
};

export default LoginUser;