import React from 'react';

//only use in class component
//its stop rerendring of state with same 

class PureComponent extends React.PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    render()
    {
        console.warn("check rerendring");
        return(
            <div>
                <h1>PureComponent {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
                <button onClick={()=>this.setState({count:1})}>Update1</button>
            </div>
        )
    }

}

export default PureComponent;