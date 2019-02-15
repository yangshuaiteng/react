import React from 'react';
import {Link,Route} from 'react-router-dom';
import Add from './Add';
import List from './List'
class User extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="container">
            <div className="row">
            <div className="col-md-2">
                <ul>
                    <li className="list-group-item"><Link to="/user/add">添加</Link></li>
                    <li className="list-group-item"><Link to={"/user/list"}>列表</Link></li>
                </ul>
            </div>
            <div className="col-md-10">
            <Route path="/user" exact component={Add}/>
            <Route path="/user/add" component={Add}/>
            <Route path="/user/list" component={List}/>
            </div>
            </div>
        </div>
    }
}
export default User