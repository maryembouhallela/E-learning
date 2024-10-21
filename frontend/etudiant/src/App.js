import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom"
import Layouts from './views/home/layouts';
import Home from './views/home/home';
import Register from './views/dashboard/register';
import Login from './views/dashboard/login';

function App() {
  return (
    <div >
      <Router>
      <Routes>
          <Route path='/' element={<Home />}>
          <Route path='/' element={<Layouts />} />
      
         
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
      
      

    
    </div>

  );
}

export default App;
