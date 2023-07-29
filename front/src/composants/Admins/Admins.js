import { useDispatch, useSelector } from "react-redux"
import HeaderAdmin from "./Header/HeaderAdmin"
import "./admins.css"
import { useEffect } from "react"
import { getAnnonces } from "../../Redux/Reducer/AnnonceReducer"

const Admins = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(getAnnonces())
  }, [dispatch] )
  const Annonces = useSelector(state => state.Annonce.annonce).annonce
  return (
    <div className="Admins">
      <HeaderAdmin/>
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

export default Admins
