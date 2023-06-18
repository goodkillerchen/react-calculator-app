import ACTIONS from "./action"

const reducer = (state = {
    currentState: "0",
    lastState: "",
    operator: ""
}, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;