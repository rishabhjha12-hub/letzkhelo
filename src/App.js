import { Home } from "./components/Home";
import {Create} from './components/Create'
import { BrowserRouter,  Route,Routes } from 'react-router-dom'
import Teams from "./components/Teams";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { UserAuthContextProvider, useUserAuth } from "./context/UserAuthContext";
import { Aboutus } from "./components/Aboutus";
import { Contactus } from "./components/Contactus";
import { Yourteam } from "./components/Yourteam";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const user=useUserAuth();
  return (
 
    <BrowserRouter>
       <UserAuthContextProvider>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="create" element={<Create/>}/>
      <Route path="teams" element={<Teams />}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="aboutus" element={<Aboutus/>}/>
      <Route path="contactus" element={<Contactus/>}/>
      {/* <Route path="yourteam" element={<Yourteam/>}/> */}
      
    </Routes>
    </UserAuthContextProvider>
 </BrowserRouter>
  );
}

export default App;
