import React from 'react';
import ReactDOM from 'react-dom'

/* let obj={name:'yst'}
let ele=<div>hello world{obj.name}</div>
//通过babel转换成虚拟的DOM  
//React.createElement() 第一个参数是标记名   第二个参数是属性  从第三个参数开始是这个标签的内容
console.log(ele); */

class Clock extends React.Component{//1、声明一个组件
    constructor(props){//如果在构造函数中要用到props属性的值要传过来【必须传】
        super()
        this.state={time:new Date().toLocaleString()}//只能在初始化的时候这样写
        this.timer=null//this指的是组件
        console.log(props);
        
    }
    componentDidMount(){//dom元素渲染完后
        this.timer=window.setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
    }
    componentWillUnmount(){//清除定时器或事件绑定
        clearInterval(this.will);
        this.timer=null
    }

    render(){
        return <div>{this.state.time}{this.props.name}</div>
    }
}

let obj={name:"杨帅腾"}
ReactDOM.render(<Clock {...obj}/>,window.root)//2.渲染组件

