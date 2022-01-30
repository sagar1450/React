import './Form.css'
import { useState } from 'react/cjs/react.development';
function Form(){
    const[name,setName]=useState('');
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState('');
    function getData(e){
        console.log(name,tnc,interest);
        e.preventDefault();
    }
    return(
        <div>
            <h1>FORM</h1>
            <form onSubmit={getData} className="form">
                <div className="div">
                Name: <input type="text" onChange={(e)=>setName(e.target.value)}></input><br /><br />
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>select option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} ></input><span>Terms and Condition</span><br /><br />
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;