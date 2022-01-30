import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";

//using function
function Props1(props){
    return(
        <div>
            Name:{props.name}
        </div>
    )
}
//using class

class Props2 extends Component{
    constructor() {
        super();
        this.state = {
            data: 'sagar'
        }

    }  
    render(){
         return(
             <div>
                 <h2>Name:{this.state.data}</h2>
                <button onClick={()=>this.setState({data:"pegu"})}>Click</button>

             </div>
         )
    }
}

function Props3(props){
    return(
        <div>
            <h1>Props Component</h1>
            <button onClick={props.data}>click</button>
        </div>
    )
}

export {Props1,Props2,Props3};