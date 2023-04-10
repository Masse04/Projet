import { Link, useNavigate } from "react-router-dom"
import { AccountService } from "../../../AccountService.js/AccountService"

const HeaderAdmin = () => {
  let navigate = useNavigate()
  const LogOut = (n) => {
    if (n === 'LogOut')
    AccountService.logOut(navigate)
}
  let admin = '/Admin/signIn'
  let etudiant = '/Etudiant/signIn'
  let prof = '/Prof/signIn'
  let parent = '/Parent/signIn'   
  const Redirect = (n) => {
    if (n === 'Admin')
      navigate(admin)
    else if (n === 'Etudiant')
      navigate(etudiant)
    else if (n === 'Prof')
      navigate(prof)
    else if (n === 'Parent')
      navigate(parent)

    console.log(n)
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to = '/Admin/connexion'><button className="btn btn-outline-warning" type="submit">Accueil</button></Link>
                <select className="btn btn-outline-warning" onClick={(e)=> {Redirect(e.target.value)}}>
                  <option>New User</option>
                  <option value= 'Admin'>Admin</option>
                  <option value= 'Etudiant'>Etudiant</option>
                  <option value= 'Prof'>Prof</option>
                  <option value= 'Parent'>Parent</option>
                </select>
                <select className="btn btn-outline-warning" onClick={(e) => LogOut(e.target.value)}>
                    <option>Profil</option>
                    <option style={{backgroundColor:'red'}}>LogOut</option>
                </select>
                
            </div>
        </nav>
    </div>
  )
}

export default HeaderAdmin