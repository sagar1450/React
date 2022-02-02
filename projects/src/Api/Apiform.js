import React, { useState, useEffect } from "react";

function Apiform() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discription, setDiscription] = useState("");

    function saveData() {
        let data = { title, category, price, discription };
        console.log(data);

        fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })
       
        alert("data added")
    }
    return (
        <div>
          
            <h1>Form</h1>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /><br />
            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} name="category" /><br />
            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" /><br />
            <input type="text" value={discription} onChange={(e) => { setDiscription(e.target.value) }} name="discription" /><br />
            <button onClick={saveData}>Save User</button>
        </div>
    )
}

export default Apiform;