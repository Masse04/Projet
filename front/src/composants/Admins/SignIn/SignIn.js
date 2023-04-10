import {Link} from 'react-router-dom'
import HeaderAdmin from '../Header/HeaderAdmin'
const SignIn = () => {
    
  return (
    <div>
      <HeaderAdmin/>
      <Link to='/Etudiant/signIn'><button type="button" className="btn btn-outline-primary">Etudiant</button></Link>
      <Link to='/Prof/signIn'><button type="button" className="btn btn-outline-success">Prof</button></Link>
      <Link to='/Parent/signIn'><button type="button" className="btn btn-outline-secondary">Parent</button></Link>
      <Link to='/Admin/signIn'><button type="button" className="btn btn-outline-warning">Admin</button></Link>
    </div>
  )
}

export default SignIn