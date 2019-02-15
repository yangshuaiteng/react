import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/todo'
class TodoList extends React.Component {
    filterTodos=()=>{
        if (this.props.type=="all") {
            return [...this.props.todos]
        }else if(this.props.type=='finish'){
            let todos2=this.props.todos.filter(item=>item.isSelected)
            return [...todos2]
        }else if(this.props.type=='unfinish'){
            let todos3=this.props.todos.filter(item=>!item.isSelected)
            return [...todos3]
        }
    }
    render() {
        return <ul className="list-group">
            {this.filterTodos().map((item, index) => {
                return <li className="list-group-item" key={index}>
                    <input type="checkbox" checked={item.isSelected} onChange={() => {
                        this.props.changeSelected(item.id)
                    }} />{item.content}
                    <button className="btn btn-xs pull-right" onClick={() => { this.props.delete(item.id) }}>X</button>
                </li>
            })}
        </ul>
    }
}
export default connect(state => ({ ...state }), actions)(TodoList)