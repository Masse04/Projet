import { Link, useNavigate } from "react-router-dom"
import { AccountService } from "../../../AccountService.js/AccountService"

const HeaderParent = () => {
    let navigate = useNavigate()
    const LogOut = (n) => {
        if (n === 'LogOut')
        AccountService.logOut(navigate)
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to = '/Prof/connexion'><button className="btn btn-outline-warning" type="submit">Accueil</button></Link>
                <Link to = ''><button className="btn btn-outline-warning" type="submit">Cours</button></Link>
                <Link to = ''><button className="btn btn-outline-warning" type="submit">Notes</button></Link>
                <Link to = ''><button className="btn btn-outline-warning" type="submit">Exercices</button></Link>
                <select className="btn btn-outline-warning" onClick={(e) => LogOut(e.target.value)}>
                    <option>Profil</option>
                    <option style={{backgroundColor:'red'}}>LogOut</option>
                </select>
                
            </div>
        </nav>
    </div>
    );
};

export default HeaderParent;