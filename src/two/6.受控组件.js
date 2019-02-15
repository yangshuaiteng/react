import React from 'react';
import ReactDOM from 'react-dom';
//受控组件指表单元素显示的内容不再是用户输入的内容，他显示的内容是由状态来决定的，value值是一个状态  必须要设置onChange事件
class Hello extends React.Component {
    constructor() {
        super();
        this.state = { val: "" }
    }
    handleChange = (e) => {

        let val = e.target.value.toUpperCase()
        this.setState({ val })

    }
    render() {
        return <div>
            <input type="text" value={this.state.val} onChange={this.handleChange} />+
            <input type="text" value={this.state.val} onChange={this.handleChange} />
        </div>
    }
}
ReactDOM.render(<Hello />, window.root)