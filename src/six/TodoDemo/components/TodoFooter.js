import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/todo'
class TodoFooter extends React.Component {
    handleClick = (e) => {
        let val = e.target.parentNode.dataset.type;
        this.props.changeType(val)
    }
    render() {
        return <ul className="nav nav-pills">
            <li data-type='all' className={this.props.type == "all" ? "active" : ""} onClick={this.handleClick}><a href="##">全部</a></li>
            <li data-type='unfinish' className={this.props.type == "all" ? "unfinish" : ""} onClick={this.handleClick}><a href="##">未完成</a></li>
            <li data-type='finish' className={this.props.type == "all" ? "finish" : ""} onClick={this.handleClick}><a href="##">已完成</a></li>
        </ul>

    }
}
export default connect(state => ({ ...state }), actions)(TodoFooter)