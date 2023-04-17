import "./App.css";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Order from './Pages/Order';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

function App() {

    const [ display, setDisplay ] = useState("none");
    const [ user, setUser ] = useState(localStorage.getItem('user'))
    
    const setuser = (data) => {
      setUser(data);
    }

    const pass = () => {
      if(display === "none")
      {
        setDisplay("flex");
      }
      else
      {
        setDisplay("none");
      }
    }

  return (
    <>
      <Routes>
        <Route exact path='/' element={user ? <Home display={display} pass={pass} setuser={setuser} user={user} /> : <Login setuser={setuser} />} />
        <Route exact path='/login'  element={<Login setuser={setuser} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/profile' element={user ? <Profile display={display} pass={pass} setuser={setuser} user={user} /> : <Login setuser={setuser} />}  />
        <Route exact path='/cart' element={user ? <Cart display={display} pass={pass} setuser={setuser} user={user} /> : <Login setuser={setuser} />} />
        <Route exact path='/order' element={user ? <Order display={display} pass={pass} setuser={setuser} user={user} /> : <Login setuser={setuser} />} />
      </Routes>
    </>
  );
}

export default App;
