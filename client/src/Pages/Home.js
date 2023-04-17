import Nav from '../Components/nav';
import Slider from '../Components/slider';
import List from '../Components/list';
import Footer from '../Components/footer';
import Resetpass from '../Components/resetpass';
import { useState } from 'react';

function Home(props) {

  const [ fillter, setFillter ] = useState("none");

  function setfillter(value)
  {
    setFillter(value);
  }

    return (
      <>
        <Resetpass  display={props.display} pass={props.pass} user={props.user} />
        <Nav pass={props.pass} setuser={props.setuser} user={props.user} />
        <div className="header"></div>
        <Slider fillter={fillter} setfillter={setfillter} />
        <List fillter={fillter} user={props.user} />
        <Footer />
      </>
    );
  }
  
  export default Home;