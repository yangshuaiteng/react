//导出store
import {createStore,combineReducers} from 'redux';
import counter from './reducer/counter';
import todo from './reducer/todo'
let reducer=combineReducers({
    counter,todo
})
export default createStore(reducer)
