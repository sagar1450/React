import { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { userAdd } from "../Container/UserContainer";
import "./user.css"

function AddUser() {
    const [state,setState]=useState({
        name:'',
        address:'',
        email:''
    })

    const{name,address,email}=state
    const[error,setError]=useState('');
    let dispatch=useDispatch();
    const navigate=useNavigate();

    const HandleInputChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value});
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(!name || !address || !email){
            setError("please fill all the field");
        }else{
            dispatch(userAdd(state));
            navigate(-1);
            setError("");
        }
    }
    return (
        <div>

            <div className="addUser">                
                <h3 style={{color:"red"}}>{error}</h3>
                <form onSubmit={submitHandler}>
                <h2 className="h2">Add User</h2>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={HandleInputChange} placeholder="Your name.." />
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" value={address} onChange={HandleInputChange} placeholder="Address.." />
                    <label for="Email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={HandleInputChange} placeholder="Email.." />
                    <div className="scbtn">
                    <button className="submit">Submit</button>
                    <button onClick={()=>navigate(-1)} className="cancelbtn">Cancel</button>
                    </div>
                    
                    
                    
                </form>
            </div>
        </div>
    )
}

export default AddUser;