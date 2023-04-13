import SignInParent from './composants/Admins/SignIn/SignInParent';
import SignInEtudiant from './composants/Admins/SignIn/SignInEtudiant';
import SignInProf from './composants/Admins/SignIn/SignInProf';
import SignInAdmin from './composants/Admins/SignIn/SignInAdmin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admins from './composants/Admins/Admins';
import Etudiants from './composants/Etudiants/Etudiants';
import Parents from './composants/Parents/Parents';
import Profs from './composants/Profs/Profs'
import Notes from './composants/Notes/Notes';
import Exercices from './composants/Exercices/Exercices';
import Cours from './composants/Cours/Cours';
import SignInUser from './composants/SignInUser/SignInUser';
import LoginUser from './composants/LogIn/LoginUser';
import Upload from './composants/Cours/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/User/logIn' element={<LoginUser/>} />
          <Route path='/User/signIn' element={<SignInUser/>}/>
          <Route path='/Etudiant/signIn' element={<SignInEtudiant/>}/>
          <Route path='/Prof/signIn' element={<SignInProf/>}/>
          <Route path='/Parent/signIn' element={<SignInParent/>}/>
          <Route path='/Admin/signIn' element={<SignInAdmin/>}/>
          <Route path='/Admin/connexion' element={<Admins/>}/>
          <Route path='/Etudiant/connexion' element={<Etudiants/>}/>
          <Route path='/Parent/connexion' element={<Parents/>}/> 
          <Route path='/Prof/connexion' element={<Profs/>}/>
          <Route path='/Notes' element={<Notes/>}/>
          <Route path='/Exercices' element={<Exercices/>}/>
          <Route path='/Prof/Cours' element={<Cours/>}/>
          <Route path='/Document/upload' element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
