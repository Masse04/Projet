import { useRef, useState } from "react";
import {useDispatch} from 'react-redux'
import { createCours } from "../../Redux/Reducer/CourReducer";
import { useNavigate } from "react-router-dom";
import './formDocument.css'

// Cette page gere l'upload des Cours

const FormDocument = () => {
    const [document,setDocument] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch() ;
    const formRef = useRef(null)
    const onChange = (e) => {
        setDocument({...document,
        [e.target.name] : e.target.value
        })
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        if (!formRef){
            return
        }
        const result = await dispatch(createCours(new FormData(formRef.current)))
        const nav = typeof result.payload.message
        if (nav === 'string'){
            navigate('/Prof/Cours')
        }
    }
    return (
        <div className="formDocument">
            <form ref={formRef} onSubmit={onSubmit}>
                <div className="form">
                    <label className="form-label"></label>
                    <input type="text" placeholder='Titre' className="form-control" name="titre" id="floatingInputGroup1" required onChange={onChange}/>
                </div>
                <div className="form">
                    <label className="form-label"></label>
                    <input type="text" placeholder="Description" className="form-control" name="description" id="floatingInputGroup1" required onChange={onChange}/>
                </div>
                <div className="classe">
                    <label className="form-label">Classe : Uniquement pour les Etudiants</label>
                    <select id="inputClasse" placeholder="classe" className="form-select" name="classe" onClick={onChange}>
                        <option ></option>
                        <option value='Seconde'>Seconde</option>
                        <option value='Premiere'>Premiere</option>
                        <option value='Terminale'>Terminale</option>
                    </select>
            </div>
                <div className="form-floating">
                    <label className="form-label"></label>
                    <input type="file" placeholder="Fichier" className="form-control" id="floatingInputGroup" name="document" required />
                </div>
                <div className="button">
                    <button type="submit" className="btn btn-warning">Upload</button>
                </div>
            </form>
        </div>
    );
};

export default FormDocument;