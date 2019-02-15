import React from 'react';
import { createStore } from './封装redux'
let store = createStore(reducer);


function reducer(state={num:0},action) {
    switch (action.type) {
        case "ADD":
            return {...state,num:state.num+action.num};
        case "REDUCE":
            return {...state,num:state.num-action.num};
            default:
            return {...state}
    }
}


export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = { num: store.getState().num }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().num})
        })
    }
    render() {
        return <div>
            {this.state.num}
            <button onClick={()=>{store.dispatch({ type: "ADD", num: 1 })}}>+</button>
            <button onClick={()=>{store.dispatch({ type: "REDUCE", num: 1 })}}>-</button>
        </div>
    }
}