import { useState } from 'react'
import Nav from '../Components/nav'
import Footer from '../Components/footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const Navigate = useNavigate();

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const handlechange = (e) => {
        
        setuser({
            ...user,[e.target.name]:e.target.value.trim()
        });
    }

    const login = () => {
        const { email, password } = user;

        if( email && password)
        {
            axios.post("http://localhost:5000/login",user)
            .then(res => {

                if(res.data.msg === "Login Successful")
                {
                    localStorage.setItem('user', res.data.user);
                    props.setuser(localStorage.getItem('user'));
                }
                else
                {
                    alert(res.data.msg);
                    return ;
                }
                Navigate("/");
            })
        }
        else
        {
            alert("Fill all column");
        }
    }
    
    return(
        <>
            <Nav />
            <div className="login">
                <div className="credentials">
                    <label>
                        Login
                    </label>
                    <span>
                        Email
                    </span>
                    <input type={"email"}  name='email' value={user.email} onChange={handlechange} placeholder={"Enter email here"}>

                    </input>
                    <span>
                        Password
                    </span>
                    <input type={"password"}  name='password' value={user.password} onChange={handlechange} placeholder={"Enter Password here"}>

                    </input>
                    <div>
                        <button onClick={login}>
                            LOGIN
                        </button>
                    </div>
                </div>     
            </div>
            <Footer />   
        </>
            
    );
}

export default Login;