import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//子组件更改父组件的数据
//1、父组件传递给子组件一个函数，子组件调用父组件传的函数，把数据传给父组件，数据改变则视图就会改变
class Panel extends React.Component {
    constructor() {
        super();
        this.state={color:"danger"}
    }
    changeColor=(color)=>{
        //把color状态值改成参数color的值
        this.setState({color:color})
    }
    render() {
        let {t:title,content}=this.props
        return (
            <div className={`panel panel-${this.state.color}`}>
                <Header t={'title'}/>
                <Body c={content} colorFn={this.changeColor}/>
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
    oop=()=>{
    //子组件拿到父组件的函数并执行
        this.props.colorFn("info")
    }
    render() {
        return (
            <div className="panel-body">
{this.props.c}
<button onClick={this.oop}>变</button>{/* 子组件控制父组件面板的颜色 */}
            </div>
        )
    }
}

ReactDOM.render(<Panel title='hello'  content="sunny"/>, window.root)