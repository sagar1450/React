import { ADD_To_CART } from "../constants";
import { REMOVE_To_CART } from "../constants";

export const addToCart=(data)=>{  
    return{
        type:ADD_To_CART,
        data:data
    }
 
}

export const removeToCart=()=>{   
    return{
        type:REMOVE_To_CART,
       
    }
 
}