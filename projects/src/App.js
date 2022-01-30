import logo from './logo.svg';
import './App.css';

import {State1,State2,Input} from './State/State';
import { useState } from 'react/cjs/react.development';
import {Props1,Props2, Props3} from './Props/Props';
// import Toggle from './Toggle/Toggle';
import Form from './Form/Form';
import Index from './useEffect';
// import BootStrap from './BootStrap/BootStrap';
import PureComponent from './PureComponenet/PureComponent';
import UseMemo from './UseMemo/UseMemo';
import Ref from './Ref/Ref';
import UseRef from './Ref/UseRef';
import Hoc from './HOC/Hoc';
import Api from './Api/Api';
import Apiform from './Api/Apiform';


function App() {
  function getData(){
    alert("sagar");
  }
  const[state,setState]=useState("sagar");
  return (
    <div className="App">
     
      {/* <User />
      <Users /> */}
      {/* <State /> */}
      {/* <State2 /> */}
      {/* {/* <Props name={state} /> */}
      {/* <Props2 name={state} /> */}
      {/* <button onClick={()=>{setState("pegu")}}>click</button>  */}
      {/* <Input /> */}
      {/* <Toggle /> */}
      {/* <Form /> */}
      {/* <Props3 data={getData} /> */}
      {/* <Index /> */}
      {/* <BootStrap /> */}
      {/* <PureComponent /> */}
      {/* <UseMemo /> */}
      {/* <Ref /> */}
      {/* <UseRef /> */}
      {/* <Hoc /> */}
      {/* <Routing /> */}
      <Api />
      {/* <Apiform /> */}
    </div>
  );
}

export default App;
