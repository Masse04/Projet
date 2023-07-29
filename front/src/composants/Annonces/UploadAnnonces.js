import { useState } from 'react'
import HeaderAdmin from '../Admins/Header/HeaderAdmin'
import { useDispatch } from 'react-redux'
import { createAnnonces } from '../../Redux/Reducer/AnnonceReducer'
import { useNavigate } from 'react-router-dom'

// cette page gere l'upload des Annonces

const UploadAnnonces = () => {
    const navigate = useNavigate()
    const [Ann,setAnn] = useState()
    const dispatch = useDispatch()
    const onChange = (e) => {
        setAnn( {...Ann,
            [e.target.name] : e.target.value} )
            console.log(Ann)
            console.log(e.target.name + ' : ' + e.target.value)
        }
    const onSubmit = async (e) => {
        e.preventDefault()
        let result = await dispatch(createAnnonces(Ann))
        const nav = typeof result.payload.message
        if (nav === 'string'){
            navigate('/Admin/annonces')
        }
    }
    return (
    <div className='UploadAnnonces'>
        <HeaderAdmin/>
        <form onSubmit={onSubmit}>
            <div className="form">
                <input type="text" placeholder='Titre' className="form-control" name="titre" id="floatingInputGroup1" required  onChange={onChange} />
            </div>
            <div className="form">
                <textarea placeholder="Annonces" className="form-control" name="description" id="floatingInputGroup1" required onChange={onChange}/>
            </div>
            <div className='form'>
                <button type="submit" className="btn btn-warning">Charger</button>
            </div>
        </form>
    </div>
    )
}

export default UploadAnnonces