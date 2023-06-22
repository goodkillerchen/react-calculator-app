import ACTIONS from "./action"

const reducer = (state = {
    currentState: "0",
    lastState: "",
    override: false
}, action)=>{
    console.log(state.override)
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(!state.override){
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
            }
            else{
                return {
                    ...state
                }
            }
        case ACTIONS.CHOOSE_OPERATOR:
            if(action.operator !== '='){
                return {
                    ...state,
                    lastState: state.currentState + action.operator,
                    currentState: "0",
                    override: false
                }
            }
            else {
                let calLastState = state.lastState// for eval to calculate
                if(calLastState.includes('÷')){
                    calLastState = calLastState.replace('÷', '/')
                }
                else if(calLastState.includes('×')){
                    calLastState = calLastState.replace('×', '*')
                }
                return {
                    ... state,
                    currentState: eval(calLastState + state.currentState).toString(), //number -> string
                    lastState: "",
                    override: true
                }
            }
        default:
            return state;
    }
}

export default reducer;