import { ADD_To_CART ,REMOVE_To_CART} from "../constants";

const initialState={
    cardData:[]
}

 function cardItems(state=[],action){
    switch(action.type){
        case ADD_To_CART:
           
            return[
                ...state,
                {cardData:action.data}
            ]
            break;       
            
            case REMOVE_To_CART:
                state.pop();
                return[
                    ...state,
                   
                ]
                break;        
   
            default:
                return state
    }
}

export default cardItems;