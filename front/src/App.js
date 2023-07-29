import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admins from './composants/Admins/Admins';
import Etudiants from './composants/Etudiants/Etudiants';
import Parents from './composants/Parents/Parents';
import Profs from './composants/Profs/Profs'
import Notes from './composants/Notes/Notes';
import Exercices from './composants/Exercices/Exercices';
import CoursProf from './composants/Cours/CoursProf';
import SignInUser from './composants/SignInUser/SignInUser';
import LoginUser from './composants/LogIn/LoginUser';
import Upload from './composants/Cours/Upload';
import Annonces from './composants/Annonces/Annonces';
import UploadAnnonces from './composants/Annonces/UploadAnnonces';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginUser/>}/>
          <Route path='/User/logIn' element={<LoginUser/>} />
          <Route path='/User/signIn' element={<SignInUser/>}/>
          <Route path='/Admin/connexion' element={<Admins/>}/>
          <Route path='/Etudiant/connexion' element={<Etudiants/>}/>
          <Route path='/Parent/connexion' element={<Parents/>}/> 
          <Route path='/Prof/connexion' element={<Profs/>}/>
          <Route path='/Notes' element={<Notes/>}/>
          <Route path='/Exercices' element={<Exercices/>}/>
          <Route path='/Prof/Cours' element={<CoursProf/>}/>
          <Route path='/Cours/upload' element={<Upload/>}/>
          <Route path='/Admin/annonces' element={<Annonces/>}/>
          <Route path='/Annonce/upload' element={<UploadAnnonces/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
