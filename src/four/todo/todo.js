/* import React from 'react';
import { createStore } from '../封装redux';
let store = createStore(reducer);

function reducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.val]
        default:
            return [...state]
    }
}
export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = { thing: [] }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({thing:store.getState()})
        })
    }
    render() {
        return <div>
            <input type="text" onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    store.dispatch({ type: "ADD", val:e.target.value})
                }
            }} />
            <ul>
                {this.state.thing.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    }
} */
//1.派发指令时传的数据是什么
//2.需要的状态数据格式是什么，
import React from 'react';
import { createStore } from '../封装redux';
let store = createStore(reducer)
function reducer(state=[],action) {
    switch (action.type) {
        case "ADD":
          return [...state,action.val]
        default:
            return [...state]
    }
}
export default class Todo extends React.Component {
    constructor() {
        super();
        this.state={thing:[]}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({thing:store.getState()})
        })
    }
    render() {
        return <div>
            <input type="text" onKeyDown={(e)=>{
                if(e.keyCode===13){
                    store.dispatch({type:"ADD",val:e.target.value})
                }
            }}/>
            <ul>
                {this.state.thing.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    }
}
