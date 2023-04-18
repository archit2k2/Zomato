import "./App.css";
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { useState } from "react";
import Order from './Pages/Order';
import Login from './Pages/Login';
import Nav from './Components/nav';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Footer from './Components/footer';
import Resetpass from './Components/resetpass';
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
      <Nav pass={pass} setuser={setuser} user={user} />
      <Resetpass  display={display} pass={pass} user={user} />
      <Routes>
        <Route exact path='/' element={user ? <Home user={user} /> : <Login setuser={setuser} />} />
        <Route exact path='/login'  element={<Login setuser={setuser} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/profile' element={user ? <Profile user={user} /> : <Login setuser={setuser} />}  />
        <Route exact path='/cart' element={user ? <Cart user={user} /> : <Login setuser={setuser} />} />
        <Route exact path='/order' element={user ? <Order user={user} /> : <Login setuser={setuser} />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
