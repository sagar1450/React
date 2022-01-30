import React,{useRef} from 'react';
import ForwardRef from './ForwardRef';
function UseRef(){
    let inputref=useRef(null);
    function handleInput(){
        inputref.current.value="1000";
    }
    return(
        <div>
            <h1>ForwardRef</h1>
            {/* <input type="text" ref={inputref}  /> */}
            <ForwardRef ref={inputref}/>
            <button onClick={()=>handleInput()}>Update1</button>
        </div>
    )
}

export default UseRef;