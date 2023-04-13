import { useRef, useState } from "react";
import {useDispatch} from 'react-redux'
import { createDocument } from "../../Redux/Reducer/DocumentReducer";

const FormDocument = () => {
    const [document,setDocument] = useState()
    const dispatch = useDispatch() ;
    const formRef = useRef(null)
    const onChange = (e) => {
        setDocument({...document,
        [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!formRef){
            return
        }
        dispatch(createDocument(new FormData(formRef.current)))
    }
    return (
        <div className="formDocument">
            <form ref={formRef} onSubmit={onSubmit}>
                <div className="form-floating">
                    <label>Titre</label>
                    <input type="text" className="form-control" name="titre" id="floatingInputGroup1" required onChange={onChange}/>
                </div>
                <div className="form-floating">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description" id="floatingInputGroup1" required onChange={onChange}/>
                </div>
                <div className="form-floating">
                    <label>Classe</label>
                    <input type="text" className="form-control" name="classe" id="floatingInputGroup1" required onChange={onChange}/>
                </div>
                <div className="form-floating">
                    <input type="file" className="form-control" id="floatingInputGroup" name="document" required />
                    <label>Fichier</label>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >LogIn</button>
                </div>
            </form>
        </div>
    );
};

export default FormDocument;