import axios from "axios"
import {getUser,deleteUser, addUser, getsingleUser, updateUser} from "../redux/action"
// import deleteUser from "../redux/action"


export const loadUsers = () => {
    return function (dispatch) {
        axios.get("http://localhost:4000/user").
            then((resp) => {
                console.log(resp.data)
                dispatch(getUser(resp.data))
            })
            .catch = error => console.log(error)
    }
}

export const userDelete = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:4000/user/${id}`).
            then((resp) => {
                console.log(resp.data)
                dispatch(deleteUser())
                dispatch(loadUsers())
            })
            .catch = error => console.log(error)
    }
}

export const userAdd = (user) => {
    return function (dispatch) {
        axios.post("http://localhost:4000/user",user).
            then((resp) => {
                console.log(resp.data)
                dispatch(addUser())
                dispatch(loadUsers())
            })
            .catch = error => console.log(error)
    }
}

export const singleuser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:4000/user/${id}`).
            then((resp) => {
                console.log(resp.data)
                dispatch(getsingleUser(resp.data))
                // dispatch(loadUsers())
            })
            .catch = error => console.log(error)
    }
}

export const updateuser = (id,user) => {
    return function (dispatch) {
        axios.put(`http://localhost:4000/user/${id}`,user).
            then((resp) => {
                console.log(resp.data)
                dispatch(updateUser())
                // dispatch(loadUsers())
            })
            .catch = error => console.log(error)
    }
}