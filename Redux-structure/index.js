const redux= require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM"

const buyCake=()=>{
    return{
        type:BUY_CAKE,
        info:"first redux action"
    }
}

const buyIcecream=()=>{
    return{
        type:BUY_ICECREAM,
        info:"first redux action"
    }
}

const initialcake={
    numOfCakes:10
}

const initialicecream={
    numOfIcecream:20
}

const cakeReducer=(state=initialcake,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const icecreamReducer=(state=initialicecream,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIcecream:state.numOfIcecream-1
        }
        default:return state
    }
}
const rootReducers=combineReducer({
    cake:cakeReducer,
    ice_cream:icecreamReducer
})
const store=createStore(rootReducers,applyMiddleware(logger));
console.log(store.getState());
 const unsubscribe=store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
 store.dispatch(buyIcecream());
 store.dispatch(buyIcecream());
 unsubscribe();
