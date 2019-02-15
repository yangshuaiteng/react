import { createStore,combineReducers } from '../store/1.redux'
import todo from './reducer/todo';
import counter from './reducer/counter'

//合并reducer
//{counter:{num:0},todo:[1,2,3]}
let reducer=combineReducers({
    counter,todo
})


export default createStore(reducer)
