import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/todo'
class TodoHeader extends React.Component {
    getnumber=()=>{
        return this.props.todos.filter(item=>!item.isSelected).length
    }
    render() {
        return <div>
            <div className="h3">你还有{this.getnumber()}件事没完成</div>
            <input type="text" className="form-control" onKeyDown={e=>{
                if(e.keyCode===13){
                    let val=e.target.value;
                this.props.add({id:Math.random(),isSelected:false,content:val});
                e.target.value=""
                }
            }}/>
        </div>
    }
}
export default connect(state=>({...state}),actions)(TodoHeader)