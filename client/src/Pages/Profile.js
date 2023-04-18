import { useState, useEffect } from 'react';
import axios from 'axios';

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value + 1);
}

function Profile(props) {

    const [ save, setSave ] = useState("none");
    const [ update, setUpdate ] = useState("block");
    const [ LoggedProfile, setLoggedProfile ] = useState({
        first_name : "",
        last_name : "",
        mobile: "",
        email : "",
        address : ""
    });

    const forceUpdate = useForceUpdate();

    useEffect(() => {
      
        axios.get("http://localhost:5000/get-profile", {
            params : {
                email : props.user
            }
        })
        .then(res => {
            setLoggedProfile(res.data.profile);
        })

    },[props.user])

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

        if(e.target.name === "first_name" || e.target.name === "mobile")
        {
            a = a.trim();
        }

        setLoggedProfile({
            ...LoggedProfile,[e.target.name] : a
        });
    }
    
    const Save = () => {

        const { first_name, last_name, mobile } = LoggedProfile;

        if(save === "none")
        {
            setSave("block");
            setUpdate("none");
        }
        else
        {
            setSave("none");
            setUpdate("block");
        }

        if(first_name && last_name && mobile )
        {
            axios.post("http://localhost:5000/update-profile", LoggedProfile)
            .then(res => {
                alert(res.data.msg);
                forceUpdate();
            })
        }
        else
        {
            alert("Fill all column");
        }
    }

    const Update = () => {

        if(update === "none")
        {
            setSave("none");
            setUpdate("block");
        }
        else
        {
            setSave("block");
            setUpdate("none");
        }
    }

    const [ disabled, setDisabled ] = useState(true);

    const Disable = () => {

        if(disabled)
        {
            setDisabled(false);
        }
        else
        {
            setDisabled(true);
        }
    }

    return(
        <>
            <div className="personal-info">
                <div className='personal-info-tab'>
                    <label>
                        MY PROFILE
                    </label>
                    <div className="input-field">
                        <span>
                            First Name : 
                        </span>
                        <input name='first_name' value={LoggedProfile.first_name} onChange={handlechange} disabled={disabled}>

                        </input>
                    </div>
                    <div className="input-field">
                        <span>
                            Last Name : 
                        </span>
                        <input name='last_name' value={LoggedProfile.last_name} onChange={handlechange} disabled={disabled}>

                        </input>
                    </div>
                    <div className="input-field">
                        <span>
                            Mobile : 
                        </span>
                        <input name='mobile' value={LoggedProfile.mobile} onChange={handlechange} disabled={disabled}>

                        </input>
                    </div>
                    <div className="input-field">
                        <span>
                            Email : 
                        </span>
                        <input value={LoggedProfile.email} disabled>

                        </input>
                    </div>
                    <div className="input-field">
                        <span>
                            Address : 
                        </span>
                        <textarea name='address' value={LoggedProfile.address} onChange={handlechange} disabled={disabled}>

                        </textarea>
                    </div>
                    <div className="btns">
                        <button style={{backgroundColor: "rgb(6, 216, 6)", display: save}} onClick={() => {Save();Disable()}}>
                            SAVE
                        </button>
                        <button style={{backgroundColor: "rgb(22, 142, 255)", display : update}} onClick={() => {Update();Disable()}}>
                            UPDATE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;