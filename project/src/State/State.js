import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";
//using function
function State1() {
    const [state, setState] = useState("sagar");

    const ChangeData = () => {
        setState("pegu");
        console.log(state);
    }


    return (

        <div>
            <h2> {state}</h2>
            <button onClick={ChangeData}>Click</button>
        </div>
    )
}

//using class

class State2 extends Component {
    constructor() {
        super();
        this.state = {
            data: 'sagar'
        }

    }  
    render(){
        return (

            <div>
                <h2> {this.state.data}</h2>
                <button onClick={()=>this.setState({data:"pegu"})}>Click</button>
            </div>
        )
    }
}

function Input(){
    const[data,setData]=useState("sagar");
    const[print,setprint]=useState(false);
    function getData(event){
       setData(event.target.value);
       setprint(false);
    }
    return(
       <div>
          {print?<h1>{data}</h1>:null}
           <input type="text" onChange={getData} />
           <button onClick={()=>setprint(true)}> click</button>

       </div>
      
    )
}

export { State1, State2, Input };