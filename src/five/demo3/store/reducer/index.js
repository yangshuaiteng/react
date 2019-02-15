import {createStore,combineReducers} from 'redux';
import counter from './counter'
let reducer=combineReducers({//state==》{counter:{number:0}}
    counter
})
export default createStore(reducer)