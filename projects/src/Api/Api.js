import React, { useState, useEffect } from "react";

function Api() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discription, setDiscription] = useState("");
    const [usersId, setUsersId] = useState(null);
    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch("http://localhost:4000/products").then((result) => {
            result.json().then((resp) => {
                setData(resp)
                setCategory(resp[0].title)
                setTitle(resp[0].category)
                setPrice(resp[0].price)
                setDiscription(resp[0].discription)
                setUsersId(resp[0].id)
            })
        })
    }

    function deleteUser(id) {

        fetch(`http://localhost:4000/products/${id}`, {
            method: 'DELETE',

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                getList()
            })
        })
        
    }

    function selectUser(id) {
        setTitle(data[id - 1].title)
        setCategory(data[id - 1].category)
        setPrice(data[id - 1].price)
        setDiscription(data[id - 1].discription)
        setUsersId(data[id - 1].id)
    }

    function update() {
        let datas = {  title, category,price,discription, usersId }

        console.log(datas);

        fetch(`http://localhost:4000/products/${usersId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })
        alert("data updated")
    }

    return (
        <div style={{ display: "flex" }}>
            <table border="1">
                <tbody>
                <tr>                   
                    <td>Id</td>
                    <td>Title</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Discription</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>                          
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.discription}</td>
                            <td><button onClick={() => deleteUser(item.id)} >Delete</button></td>
                            <td><button onClick={() => selectUser(item.id)} >Update</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div style={{ margin: "5% 20%" }}>                
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /><br /><br />
                <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} name="category" /><br /><br />
                <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" /><br /><br />
                <input type="text" value={discription} onChange={(e) => { setDiscription(e.target.value) }} name="discription" /><br /><br />
                <button onClick={() => update()} >Save User</button>
            </div>
        </div>
    )
}

export default Api;