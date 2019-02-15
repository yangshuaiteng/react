import React from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions/todo'
class Todo extends React.Component{

    render(){
        console.log(this.props.todo);
        return <div>
            <input type="text" onKeyDown={(e)=>{
                if(e.keyCode===13){
                    this.props.todo(e.target.value)
                    e.target.value=''
                }
            }}/>
            <ul>
          {this.props.todos.map((item,index)=>{
              return <li key={index}>{item}</li>
          })}
            </ul>
        </div>
    }
}

let mapStateToProps=state=>{
    return  {todos:[...state.todo]}
}
export default connect(mapStateToProps,action)(Todo)
