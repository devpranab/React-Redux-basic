//import redux
const redux = require("redux");
//console.log(redux);

//State
const initState = { num: 0}

//Reducer - reducer can change to store
const rootReducer = (state = initState, action) => {
    //Dispatcing action 1
    if(action.type === 'INC_NUM'){
        return {
            ...state,
            num: state.num + 1
        }
    }
    //Dispatcing action 2
    if(action.type === 'ADD_NUM'){
        return {
            ...state,
            num: state.num + action.value
        }
    }
        //Dispatcing action 3
        if(action.type === 'DEC_NUM'){
            return {
                ...state,
                num: state.num - 5
            }
        }
    return state;
}

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState()); //0

//Subscribe
store.subscribe(() => { //automatically perform
    console.log("[Subscribe]", store.getState());
})

//3 Dispatcing action
store.dispatch({
    type: 'INC_NUM'
})

store.dispatch({
    type: 'ADD_NUM',
    value: 34
})

store.dispatch({
    type: 'DEC_NUM'
})

//console.log(store.getState()); //manually perform
