import {GET_USER,DELETE_USER,UPDATE_USER,ADD_USER,SINGLE_USER} from "./action-type"

 export const getUser = (users) => {
    return {
        type: GET_USER,
        payload: users
    }

}

export const deleteUser = () => {
    return {
        type: DELETE_USER,
        
    }

}
export const addUser = () => {
    return {
        type: ADD_USER,
        
    }

}

export const getsingleUser = (user) => {
    return {
        type: SINGLE_USER,
        payload:user
        
    }

}

export const updateUser = () => {
    return {
        type: UPDATE_USER,
        
    }

}
 