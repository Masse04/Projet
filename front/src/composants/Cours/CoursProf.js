import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCours } from "../../Redux/Reducer/CourReducer"
import { useNavigate } from "react-router-dom"
import HeaderProf from "../Profs/HeaderProf/HeaderProf"
import './cours.css'

const Cours = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=> {
    dispatch(getCours())
  },[dispatch])
  const documents = useSelector(state => state.Cour.cour).documents
  const Redirect = () => {
    navigate('/Cours/upload')
  }
  const affichage = (e) => {
    if (e.genre === 'image') 
      return (<div className="photo"><img src={e.documentUrl} alt="tof"/></div>)
    else if (e.genre === 'video')
      return (<div className="video"><video src={e.documentUrl} controls/></div>)
    else 
      return (<div className="texte"><embed src={e.documentUrl}/></div>)
  }
  return (
    <div className="Cours">
      <HeaderProf/>
      <div className="documents">
        {
          documents?.map(document => (
            <div className="document">
              <a href={document.documentUrl}>
                <h1>{document.titre}</h1>
                <div className="file">{affichage(document)}
                </div>
              </a>
            </div>
          )) 
        }
      </div>
      <button className="ajouter" onClick={Redirect}>Ajouter un document</button>
    </div>
  )
}

export default Cours