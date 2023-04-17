import { NavLink } from "react-router-dom";

function Option() {
    return(
        <>
            <NavLink exact className="nav-btn" to='/login'> 
                Login in
            </NavLink>
            <NavLink exact className="nav-btn" to='/signup'>
                Sign up
            </NavLink>
        </>

    );
}

export default Option;