import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const Navigate = useNavigate();

    const [user,setUser] = useState({
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        password: "",
        cart:[],
        order:[],
        address: ""
    })

    const handlechange = (e) => {

        let a;

        if(e.target.name === "first_name" || e.target.name === "last_name")
        {
            a = e.target.value.charAt(0).toUpperCase() +  e.target.value.slice(1).toLowerCase();
        }
        else
        {
            a = e.target.value;
        }

        if(e.target.name === "first_name" || e.target.name === "mobile" || e.target.name === "email" || e.target.name === "password")
        {
            a = a.trim();
        }
        
        setUser({
            ...user,[e.target.name]:a
        });
    }

    const signup = () => {
        const { first_name, last_name, email, mobile, password } = user;
        if(first_name && last_name && email && mobile && password )
        {
            if( mobile.length <10 || mobile.length>10)
            {
                alert("Check Your Mobile Number");
                return;
            }

            if(password.length<6)
            {
                alert("Password is too Short");
                return;
            }

            axios.post("http://localhost:5000/signup",user)
            .then(res => {
                if(res.data.msg === "user created")
                {
                    alert(res.data.msg);
                }
                else
                {
                    alert(res.data.msg);
                    return ;
                }
                Navigate("/login");
            })
        }
        else
        {
            alert("Fill all column");
        }
    }
    
    return(
        <>
            <div className="login">
                <div className="credentials">
                    <label>
                        Sign up
                    </label>
                    <div className="name">
                        <div>
                            <span>
                                First Name
                            </span>
                            <input type={"text"} placeholder="Enter First Name" name='first_name' value={user.first_name} onChange={handlechange}>

                            </input>
                        </div>
                        <div>
                            <span>
                                Last Name
                            </span>
                            <input type={"text"} placeholder="Enter Last Name" name='last_name' value={user.last_name} onChange={handlechange}>

                            </input>
                        </div>
                    </div>
                    <span>
                        Mobile
                    </span>
                    <input type={"text"} placeholder={"Enter Mobile Number"}  name='mobile' value={user.mobile} onChange={handlechange}>

                    </input>
                    <span>
                        Email
                    </span>
                    <input type={"email"} placeholder={"Enter Email"} name='email' value={user.email} onChange={handlechange}>

                    </input>
                    <span>
                        Password
                    </span>
                    <input type={"password"} placeholder={"Enter Password"} name='password' value={user.password} onChange={handlechange}>

                    </input>
                    <div>
                        <button onClick={signup}>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>  
        </>
            
    );
}

export default Signup;