import React, { useContext, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { AppContext } from '../../App/AppContext';
import Dropleft from './Dropleft';
import './Styles/Header.scss'

export default function Header(){
  const [ActiveDrop, setActiveDrop] = useState(false);
  const naviate=useNavigate();
  const {uid} = useContext(AppContext);

  const handleDropLeft=()=>{
    setActiveDrop(!ActiveDrop)
  }
  return (
    <div className='Header'>
      <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="Header-content ">
              <div className='dropleft'>
                  <button type='button' onClick={handleDropLeft}>drop</button>
                  {ActiveDrop && <Dropleft handleDropLeft={handleDropLeft} />}
              </div>
              <HeaderLInk/>
              <div className="btn-autha ">
                {uid===null && <button type="button" onClick={()=>naviate("/Login")} className="btn btn-outline-light">Login</button>}
                {uid!==null && <button type="button" onClick={()=>naviate("/Login")} className="btn btn-outline-light">Logout</button>}
                
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

const HeaderLInk=()=>(
  <div className='HeaderLInk'>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to={'/'}>
          <a href="#" className="nav-link px-2 text-white">Accueille</a>
        </Link>
      </li>
      <li>
        <Link to={'/'}>
          <a href="#" className="nav-link px-2 text-white">Pricing</a>
        </Link>
      </li>
      <li>
        <Link to={'/Aboute'}>
          <a href="#" className="nav-link px-2 text-white">About</a>
        </Link>

      </li>
      <li>
        <Link to={'/Contact'}>
          <a href="#" className="nav-link px-2 text-white">Contact</a>
        </Link>
      </li>
    </ul>
  </div>
)
