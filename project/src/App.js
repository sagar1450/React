import logo from './logo.svg';
import './App.css';
import {User,Users} from './User';
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
import Routing from './Router/Routing';

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
      <Hoc />
      <Routing />
    </div>
  );
}

export default App;
