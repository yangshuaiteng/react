import React from 'react';
import {Link} from 'react-router-dom'
class Nav extends React.Component {
    constructor() {
        super();
    }
    handleClick=()=>{
        this.props.history.push("/home")
    }
    render() {
        return <nav className="navbar navbar-default h4">
            <div className="navbar-header">
                <ul className="nav nav-pills">
                    <li ><Link to="/home">首页</Link></li>
                    <li ><Link to="/profile">个人中心</Link></li>
                    <li ><Link to="/user">用户</Link></li>
                </ul>
                <button className="btn btn-primary pull-right" onClick={this.handleClick}>返回首页</button>
            </div>
        </nav>
    }
}
export default Nav