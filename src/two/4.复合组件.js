import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//复合组件传递数据 不可以跨组件获取属性，每个组件只能获取自己组件上的属性
//组件传数据是单向数据流只能父传子
class Panel extends React.Component {
    constructor() {
        super();
    }
    render() {
        let {t:title,content}=this.props
        return (
            <div className="panel panel-danger">
                <Header t={'title'}/>
                <Body c={content} />
            </div>
        )
    }
}
class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log(this);
        
        return (
            <div className="panel-heading">
{this.props.t}
            </div>
        )
    }
}
class Body extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="panel-body">
{this.props.c}
            </div>
        )
    }
}

ReactDOM.render(<Panel title='hello'  content="sunny"/>, window.root)