import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import Weather from './components/Weather';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}> 
      <Route path="/" element={<Weather/>}/>
      <Route path="/logout" element={<h1>Log out</h1>}/>
      <Route path="/signin" element={<h1>Sign In</h1>}/>
      </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
  
    </div>
    </>
  );
}

export default App;
