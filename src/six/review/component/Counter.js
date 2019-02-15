import React from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions/counter'
class Counter extends React.Component{
    render(){
        console.log(this.props);
        
        return <div>
            {this.props.number}
            <button onClick={()=>{this.props.add(1)}}>+</button>
            <button onClick={()=>{this.props.minus(1)}}>-</button>
        </div>
    }
}
/* let binndActionCreatores=(actions,dispatch)=>{//{add:fn,minus:fn}
    return (dispatch)=>{//把actions里面的所有函数拿到
        let obj={};
        for(let key in actions){
            obj[key]=(...args)=>{
                return dispatch(actions[key](...args));
            }
        }
    }
} */

let mapStateToProps=state=>{//state指合并reducer后返回的对象

    return {...state.counter}
}
export default connect(mapStateToProps,action)(Counter)