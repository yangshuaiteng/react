import React from 'react';
import store from '../store'
export default class Counter extends React.Component {
    constructor() {
        super();
        this.state={num:0}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        })
    }
    render() {
        return <div>
        {this.state.num}
            <button onClick={()=>{
                store.dispatch({type:"ADD",num:1})
            }}>+</button>
            <button onClick={()=>{
                store.dispatch({type:"MINUS",num:1})
            }}>-</button>
        </div>
    }
}