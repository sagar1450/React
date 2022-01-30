import React, { useState,useEffect } from "react";

function Apiform(){
    const[userId,setUserId]=useState("");
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");

    function saveData(){
        let data={userId,title,body};
        console.log(data);

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })

        console.log(data);
    }
    return(
        <div>
            <h1>Form</h1>
            <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} name="userId" /><br />
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name="title" /><br />
            <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name="body" /><br />
            <button onClick={saveData}>Save User</button>
        </div>
    )
}

export default Apiform;