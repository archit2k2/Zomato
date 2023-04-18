import { useState } from 'react';
import List from '../Components/list';
import Slider from '../Components/slider';

function Home(props) {

  const [ fillter, setFillter ] = useState("none");

  function setfillter(value)
  {
    setFillter(value);
  }

    return (
      <>
        <div className="header"></div>
        <Slider fillter={fillter} setfillter={setfillter} />
        <List fillter={fillter} user={props.user} />
      </>
    );
  }
  
  export default Home;