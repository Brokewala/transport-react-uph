import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Field from './Pages/Field';
import NotFound from './Pages/NotFound';
import { useEffect, useState } from 'react';
import { AppContext } from './App/AppContext';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Aboute from './Pages/Aboute';
import Contact from './Pages/Contact';
import Accueille from './Pages/Accueille';
import Signup from './Pages/Signup';
import Profil from './Pages/Profil';
import axios from "axios";



function App() {
  const [region,setRegion]=useState(null);
  const [uid, setUid] = useState(null);
    
  useEffect(() => {
    const fetchToken=async()=>{
        await axios({
          method:"get",
          url:"http://localhost:5000/jwtid",
          withCredentials:true
        }).then(res=>{
          console.log(res.data);
            setUid(res.data)
        })
    }
    fetchToken();
  }, [uid]);
  return (
    <AppContext.Provider value={{uid,setRegion,region}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Field' element={<Field/>} />
          <Route exact path='/Admin' element={<Admin/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/Aboute' element={<Aboute/>} />
          <Route exact path='/Contact' element={<Contact/>} />
          <Route exact path='/Accueille' element={<Accueille/>} />
          <Route exact path='/Signup' element={<Signup/>} />
          <Route exact path='/Profil' element={<Profil/>} />
          <Route exact path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;
