import React from 'react';
import ReactDOM from 'react-dom';
//非受控组件，表单元素有自身的状态，输入的内容就是表单元素输入的内容
class Hello extends React.Component {
    constructor() {
        super();
        this.state={val:0};//用来保存表单元素相加的结果
    }
    /* change1=(e)=>{
        let a=e.target.value
        let b=this.ref.b.value
        this.setState({val:a+b})
    }
    change2=(e)=>{
        let b=e.target.value
        let a
    } */
    sum=()=>{
        console.log(this);
        
        this.setState({
            val:Number(this.refs.a.value)+Number(this.refs.b.value)+Number(this.qqq.value)
        })
    }
    render() {
        return <div onChange={this.sum}>
            <input type="number" ref="a"/>+
            <input type="number" ref="b"/>+
            <input type="number" ref={x=>this.qqq=x}/>{/* x表示当前的DOM元素 */}=
            {this.state.val}
        </div>
    }
}
ReactDOM.render(<Hello />, window.root)