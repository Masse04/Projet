import { useRef, useState } from "react";
import { Document } from "../../Class/Class";
import {useDispatch} from 'react-redux'
import { CreateDocument } from "../../Redux/Reducer/DocumentReducer";

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
        let result = dispatch(CreateDocument(new FormData(formRef.current)))
        console.log(document)
    }
const Redirect = async() => {
    let result = await dispatch(CreateDocument(document))
    console.log(result)
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
                    <input type="file" className="form-control" id="floatingInputGroup" name="document" required  /* onChange={(e)=> {setDocument({...document,document: e.target.files[0].name})}} *//>
                    <label>Fichier</label>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary"  /* onClick={Redirect} */ >LogIn</button>
                </div>
            </form>
        </div>
    );
};

export default FormDocument;