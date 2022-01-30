import React,{createRef} from 'react';

//DOM manipulation
class Ref extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef();
       
    }

    //  getVal=()=>{
    //     console.log(this.inputRef.current.value)

    // }

    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
    }
  
    render()
    {
       
        return(
            <div>
                <h1>Ref</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVal() }>Update1</button>
            </div>
        )
    }

}

export default Ref;