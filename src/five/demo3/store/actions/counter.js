//各个组件的指令
import * as actionTypes from '../action-types'
function add(text) {
return {type:actionTypes.ADD,num:text}
}
function minus(text) {
return {type:actionTypes.MINUS,num:text}
}
export {add,minus}