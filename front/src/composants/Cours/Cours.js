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
  const document = useSelector(state => state.Document.document)
  console.log(document)
  const Redirect = () => {
    navigate('/Document/upload')
  }
  return (
    <div className="Cours">
      {
        document.documents.map(el => (
          <div className="document">
            <h1>{el.titre}</h1>
            {/* <img src={el.documentUrl} alt="tof"/> */}
          </div>
        )) 
      }
      <button onClick={Redirect}>Ajouter un document</button>
    </div>
  )
}

export default Cours