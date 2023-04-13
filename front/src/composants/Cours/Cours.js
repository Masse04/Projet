import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDocument } from "../../Redux/Reducer/DocumentReducer"
import { useNavigate } from "react-router-dom"

const Cours = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=> {
    dispatch(getDocument())
  },[dispatch])
  const documents = useSelector(state => state.Document.document).documents
  console.log(documents)
  const Redirect = () => {
    navigate('/Document/upload')
  }
  const affichage = (e) => {
    if (e.genre === 'image') 
      return (<img src={e.documentUrl} alt="tof"/>)
    else if (e.genre === 'video')
      return (<video src={e.documentUrl} controls/>)
    else 
      return (<embed src={e.documentUrl}/>)
  }
  return (
    <div className="Cours">
      {
        documents?.map(document => (
          <div className="document">
            <h1>{document.titre}</h1>
            
            <div>{affichage(document)}
          </div>
          </div>
        )) 
      }
      <button onClick={Redirect}>Ajouter un document</button>
    </div>
  )
}

export default Cours