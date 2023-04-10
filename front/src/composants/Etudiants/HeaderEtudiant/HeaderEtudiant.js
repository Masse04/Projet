import { Link, useNavigate } from "react-router-dom"
import { AccountService } from "../../../AccountService.js/AccountService"
const HeaderEtudiant = () => {
    const navigate = useNavigate()
    const LogOut = (n) => {
        if (n === 'LogOut')
        AccountService.logOut(navigate)
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to = '/Etudiant/connexion'><button className="btn btn-outline-primary" type="submit">Accueil</button></Link>
                <Link to = '/Notes'><button className="btn btn-outline-primary" type="submit">Notes</button></Link>
                <Link to = '/Exercices'><button className="btn btn-outline-primary" type="submit">Exercices</button></Link>
                <Link to = '/Cours'><button className="btn btn-outline-primary" type="submit">Cours</button></Link>
                <select className="btn btn-outline-primary" onClick={(e) => LogOut(e.target.value)}>
                    <option>Profil</option>
                    <option value = 'LogOut' style={{backgroundColor:'red'}}>LogOut</option>
                </select>                
            </div>
        </nav>
    </div>
  )
}

export default HeaderEtudiant