//dispatch({type:"ADD",num:2})   {number:0}
//dispatch({type:"MINUS",num:2})
import * as actionTypes from '../action-types'
function counter(state = { number: 0 }, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return { ...state, number: state.number + action.num }
        case actionTypes.MINUS:
            return { ...state, number: state.number - action.num }
    }
    return { ...state }
}
export default counter