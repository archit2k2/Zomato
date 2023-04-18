import { useState } from 'react'
import axios from 'axios';

function Resetpass(props)
{
    const [Loggeduser,setUser] = useState({
        email : props.user,
        password : "",
        newPassword : "",
        confirmPassword : ""
    })

    const handlechange = (e) => {
        
        setUser({
            ...Loggeduser, [e.target.name]:e.target.value
        });
    }

    const reset = () => {

        const { password, newPassword, confirmPassword } = Loggeduser;

        if( password && newPassword && confirmPassword )
        {
            axios.post("http://localhost:5000/reset",Loggeduser)
            .then(res => {

                if(res.data.msg === "Password Changed Successfully")
                {
                    setUser({
                        ...Loggeduser, "password": "", "newPassword" : "", "confirmPassword" : ""
                    });
                    props.pass();
                    alert(res.data.msg);
                }
                else
                {
                    alert(res.data.msg);
                }
            })
        }
        else
        {
            alert("Fill all column");
        }
    }

    return(
        <div className="reset-window" style={{display:props.display}}>
            <div className="credentials" style={{width: "50%"}}>
                <img src={process.env.PUBLIC_URL+"Images/delete.png"} alt="loading" onClick={props.pass} />
                <label>
                    Password
                </label>
                <span>
                    Old Password
                </span>
                <input type={"password"}  name='password' onChange={handlechange} value={Loggeduser.password} placeholder={"Enter Old Password here"}>

                </input>
                <span>
                    New Password
                </span>
                <input type={"password"}  name='newPassword' onChange={handlechange} value={Loggeduser.newPassword} placeholder={"Enter New Password here"}>

                </input>
                <span>
                    Confirm Password
                </span>
                <input type={"password"}  name='confirmPassword' onChange={handlechange} value={Loggeduser.confirmPassword} placeholder={"Re-enter New Password here"}>

                </input>
                <div>
                    <button onClick={reset}>
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resetpass;