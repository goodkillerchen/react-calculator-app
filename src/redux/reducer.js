import ACTIONS from "./action"

const reducer = (state = {
    currentState: "0",
    lastState: "",
    operator: ""
}, action)=>{
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(state.currentState === "0" && action.digit !== '.'){
                return {
                    ...state,
                    currentState: action.digit
                }
            }
            if(state.currentState.includes('.') && action.digit === '.'){
                return {
                    ...state
                }
            }
            return {
                ...state,
                currentState: state.currentState + action.digit
            }
        default:
            return state;
    }
}

export default reducer;