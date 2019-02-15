import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';
ReactDOM.render(<Router>
    <App>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
    </App>
</Router>, window.root)