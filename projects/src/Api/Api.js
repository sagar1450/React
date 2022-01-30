import React, { useState, useEffect } from "react";

function Api() {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [usersId,setUsersId]=useState(null);
    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((resp) => {
                setData(resp)
                setUserId(resp[0].userId)
                setTitle(resp[0].title)
                setBody(resp[0].body)
                setUsersId(resp[0].id)
            })
        })
    }

    function deleteUser(id) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                getList()
            })
        })
    }

    function selectUser(id) {
        setUserId(data[id - 1].userId)
        setTitle(data[id - 1].title)
        setBody(data[id - 1].body)
        setUsersId(data[id-1].id)
    }

    function update(){
        let datas={userId,title,body,usersId}

        console.log(datas);

        fetch(`https://jsonplaceholder.typicode.com/posts/${usersId}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(datas)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    }

    return (
        <div style={{ display: "flex" }}>
            <table border="1">
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><button onClick={() => deleteUser(item.id)} >Delete</button></td>
                            <td><button onClick={() => selectUser(item.id)} >Update</button></td>
                        </tr>
                    )
                }
            </table>
            <div style={{ margin: "5% 20%" }}>
                <input type="text" value={userId} onChange={(e) => { setUserId(e.target.value) }} name="userId" /><br /><br />
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /><br /><br />
                <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} name="body" /><br /><br />
                <button onClick={()=>update()} >Save User</button>
            </div>
        </div>
    )
}

export default Api;