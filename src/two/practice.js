import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor() {
        super();
      this.state={a:'0',b:'0'}
    }
    change=(e,key)=>{
        //让输入的内容设置成对应的状态值
     
        
        let val=e.target.value
        this.setState({
            [key]:val  //变量作为属性时要放在[]中
        })
    }
    render() {
        return <div>
            <input type="text" value={this.state.a} onChange={e=>{this.change(e,"a")}} />+
            <input type="text" value={this.state.b} onChange={e=>{this.change(e,"b")}} />={Number(this.state.a)+Number(this.state.b)}
        </div>
    }
}
ReactDOM.render(<Hello />, window.root)