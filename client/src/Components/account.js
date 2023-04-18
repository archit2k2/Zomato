import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Account(props) {

    const [ name, setName ] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/get-name", {
            params : {
                email : props.user
            }
        })
        .then(res => {
            setName(res.data.name);
        })
    })

    const [hovered,setHovered] =useState(0);
    const style = hovered ? {display: "block"} : {}

    const onMouseEnter = () => {
        setHovered(1);
    }

    const onMouseLeave = () => {
        setHovered(0);
    }

    const handleClick = () => {
        setHovered(0);
      };


    const logout = () => {
        localStorage.setItem('user',"");
        props.setuser(localStorage.getItem('user'));
    }

    return(
        <>
            <label>
                {name}
            </label>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="profile-tab" >
                <div className="profile-img-container">
                    <img src={process.env.PUBLIC_URL+"Images/profile.png"} className="profile" alt="loading" />
                </div>
                <div className="drop-down-container">
                    <div className="drop-down" style={style}>
                        <div>
                            <NavLink exact="true" className="drop-down-option" to='/profile' onClick={handleClick}>
                                Your Profile
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className="drop-down-option" exact="true" to='/order' onClick={handleClick}>
                                Your Orders
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className="drop-down-option" exact="true" to='/cart' onClick={handleClick}>
                                Your Cart
                            </NavLink>
                        </div>
                        <div>
                            <div className="drop-down-option" onClick={()=> {props.pass(); handleClick();}}>
                                Change Password
                            </div>
                        </div>
                        <div>
                            <NavLink exact="true" className="drop-down-option" onClick={logout} to='/login'>
                                Log Out
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Account;