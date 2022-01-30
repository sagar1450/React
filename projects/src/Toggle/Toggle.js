import React, { useState } from "react";
import './Toggle.css'

function Toggle(){
    const[status,setStatus]=useState(true);
    return(
        <div className="toggle">
        {status?<h1>sagar</h1>:null}
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Toggle;