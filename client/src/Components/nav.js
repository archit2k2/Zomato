import Option from './option';
import Account from './account';
import { NavLink } from 'react-router-dom';

function Nav(props) {

    return (
      <nav>
        <NavLink exact="true" to='/'>
          <img src={process.env.PUBLIC_URL+"Images/logo-black.avif"} className="logo" alt="loading" />
        </NavLink>
        <div>
          {
            props.user ?  <Account pass={props.pass} setuser={props.setuser} user={props.user} /> : <Option /> 
          }
        </div>
      </nav>
    );
  }

  export default Nav;