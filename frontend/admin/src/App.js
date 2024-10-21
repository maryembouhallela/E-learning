
import Home from './views/home/home';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
  Navigate,
} from "react-router-dom"
import Layouts from './views/home/layouts';
import AddCours from './views/home/Cours/addCours';
import AddFormation from './views/home/Formation/addFormation';
import ListFormations from './views/home/Formation/ListFormations';
import GetCours from './views/home/Cours/ListCours';
import AddEtudiant from './views/home/Etudiant/addEtudiant';
import ListEtudiant from './views/home/Etudiant/ListEtudiant';
import AddFormateur from './views/home/Formateur/addFormateur';
import ListFormateur from './views/home/Formateur/ListFormateur';
import UpdateCours from './views/home/Cours/updateCours';
import UpdateEtudiant from './views/home/Etudiant/UpdateEtudiant';
import UpdateFormateur from './views/home/Formateur/UpdateFormateur';
import UpdateFormation from './views/home/Formation/UpdateFormation';
import Loginn from './views/Dashboard/Login';
import Forget from './views/Dashboard/forget';
import Reset from './views/Dashboard/reset';
import Register from './views/Dashboard/register';

function App() {
  const PrivateRoute = ({ children }) => {
    const user=JSON.parse(localStorage.getItem("user"))
    if(!user || user.data.__t!=="admin"){
   return   <Navigate to="/login" />
    }
    return children;
  };

  
  return (
    <Router>
      <Routes>
          <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>}>
          <Route path='/' element={<Layouts />} />
        
          <Route path='/addcours' element={<AddCours />} />
          <Route path='/addformation' element={<AddFormation />} />
          <Route path='/Listcours' element={<GetCours />} />
          <Route path='/Listformation' element={<ListFormations />} />
          <Route path='/addetudiant' element={<AddEtudiant />} />
          <Route path='/listetudiant' element={<ListEtudiant />} />
          <Route path='/addFormateur' element={<AddFormateur />} />
          <Route path='/listformateur' element={<ListFormateur />} />
          <Route path='/updateCours/:id' element={<UpdateCours />} />
          <Route path='/updateEtudiant/:id' element={<UpdateEtudiant />} />
          <Route path='/updateFormateur/:id' element={<UpdateFormateur />} />
          <Route path='/updateFormation/:id' element={<UpdateFormation />} />
         
      
         
        </Route>
        <Route path='/login' element={<Loginn />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/user/reset/:token' element={<Reset />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;