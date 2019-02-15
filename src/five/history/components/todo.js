import React from 'react';
import store from "../store";
export default class Todo extends React.Component {
    constructor() {
        super();
        this.state={ary:[]}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({ary:store.getState().todo})
        })
    }
    render() {
        return <div>
            <input type="text" onKeyDown={(e)=>{
                if(e.keyCode===13){
                    store.dispatch({type:"ADD_TODO",content:e.target.value})
                }
            }}/>
            <ul>
                {this.state.ary.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    }
}