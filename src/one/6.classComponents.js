import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
//若要更改视图的内容，需要更改状态state，需要在constructor中定义状态的初始值
constructor(){//有私有属性是才需要些constructor,写了之后必须调用super()
    super()//props接收组件上的属性
    this.state={time:new Date().toLocaleString()}
     this.timer=null

     
}
componentDidMount(){//当组件挂载成功后触发
//更改状态调用setState   数据改变视图改变
this.timer=window.setInterval(() => {
this.setState({time:new Date().toLocaleString()})
}, 1000);
}
componentWillUnmount(){//组件销毁 清除定时器或绑定的事件
window.clearInterval(this.timer)
this.timer=null;
}
distroy(){
    ReactDOM.unmountComponentAtNode(window.root)//移除挂载在root下的所有组件
}
    render(){//类组件里的内容是放在return后面   通过this.props.     
        return (
            <div>
                <h1>hello,{this.props.name}world</h1>
                <h2 onClick={this.distroy}>时间：{this.state.time}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Clock  name='********' />,window.root)