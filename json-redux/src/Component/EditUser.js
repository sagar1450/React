import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,useParams} from "react-router-dom";
import { singleuser, updateuser } from "../Container/UserContainer";
import "./user.css"

function EditUser() {
    const [state,setState]=useState({
        name:'',
        address:'',
        email:''
    })

    const{name,address,email}=state
    const[error,setError]=useState('');
    let dispatch=useDispatch();
    const navigate=useNavigate();
    let {id}=useParams();
    let {users}=useSelector((state)=>state.data);
    console.log(users)

    useEffect(()=>{
        dispatch(singleuser(id))
    },[])

    useEffect(()=>{
      if(users){
          
          setState({...users})
          console.log(users);
      }
    },[users])

    const HandleInputChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value});
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(!name || !address || !email){
            setError("please fill all the field");
        }else{
            dispatch(updateuser(id,state)); 
            navigate('/');           
            setError("");
        }
    }
    return (
        <div>

            <div className="addUser">                
                <h3 style={{color:"red"}}>{error}</h3>
                <form onSubmit={submitHandler}>
                <h2 className="h2">Edit User</h2>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={HandleInputChange} placeholder="Your name.." />
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" value={address} onChange={HandleInputChange} placeholder="Address.." />
                    <label for="Email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={HandleInputChange} placeholder="Email.." />
                    <div className="scbtn">
                    <button   className="submit">Update</button>
                    <button onClick={()=>navigate('/')} className="cancelbtn">Cancel</button>
                    </div>
                    
                    
                    
                </form>
            </div>
        </div>
    )
}

export default EditUser;