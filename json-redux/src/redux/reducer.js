import { GET_USER, DELETE_USER, UPDATE_USER ,ADD_USER,SINGLE_USER} from "./action-type"

const initialState = {
    users: [],
    user: {},
    loading: true
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER: return {
            ...state,
            users: action.payload,
            loading: false
        }
        case DELETE_USER: return {
            ...state,
            loading: false
        }
        case ADD_USER: return {
            ...state,
            loading: false
        }
        case SINGLE_USER: return {
            ...state,
            users: action.payload,
            loading: false
        }
        case UPDATE_USER: return {
            ...state,
            loading: false
        }
        default: return state

    }
}