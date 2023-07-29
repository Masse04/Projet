import { useNavigate } from "react-router-dom"
import HeaderAdmin from "../Admins/Header/HeaderAdmin"
import { useSelector } from "react-redux"

const Annonces = () => {
  const navigate = useNavigate()
  const annonce = useSelector(state => state.Annonce)
  console.log(annonce)
  const Redirect = () => {
    navigate('/Annonce/upload')
  }

  return (
    <div className="Annonces">
        <HeaderAdmin/>
        <button type="submit" className="btn btn-warning" onClick={Redirect}>Ajouter</button>
    </div>
  ) 
}

export default Annonces