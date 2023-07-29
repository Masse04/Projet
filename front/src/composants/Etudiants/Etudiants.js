import { useDispatch, useSelector } from "react-redux"
import HeaderEtudiant from "./HeaderEtudiant/HeaderEtudiant"
import { getAnnonces } from "../../Redux/Reducer/AnnonceReducer"
import { useEffect } from "react"

const Etudiants = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(getAnnonces())
  }, [dispatch] )
  const Annonces = useSelector(state => state.Annonce.annonce).annonce
  return (
    <div>
      <HeaderEtudiant/>
      <section className="getAnnonces">
        <div className="divAnnonces">
        {
          Annonces?.map(ann => (
            <div className="paragraphe">
              <h5>{ann.titre}</h5>
              <p>{ann.description}</p>
            </div>
          ))
        }
        </div>
      </section>
      
    </div>
  )
}

export default Etudiants