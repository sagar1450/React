import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { loadUsers,userDelete} from "../Container/UserContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPen } from '@fortawesome/free-solid-svg-icons'
import "./user.css"


function User(){
    const user=useSelector((state)=>state.data);
    console.log(user)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(loadUsers())
    },[])
    const Handledelete=(id)=>{
       if(window.confirm('do u want to delete?')){
           dispatch(userDelete(id))
       }
    }
 return(
  <div className="body">
      <div>
          <button onClick={()=>navigate('AddUser')} className="btnadd">ADD USER</button>
      </div>
       <div>
            <table className="user">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Eamil</th>
                    <th>Action</th>     

                </tr>
            
                    {
                    user.users.map(user =>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td> 
                            <td><button onClick={()=>Handledelete(user.id)} className="btndel"><FontAwesomeIcon icon={faTrashAlt}/></button>
                            <button onClick={()=>navigate( `EditUser/${user.id}`)} className="btnedit"><FontAwesomeIcon icon={faPen} /></button></td>                          

                        </tr>
                    )
                    }
              
            </table>

        </div>
 
  </div>
 )
}

export default User