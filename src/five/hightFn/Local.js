//容器组件
//在高阶组件外层套了一层函数，目的是为了传不同的数据和组件
//第一个参数传数据，第二个参数传组件
import React, { Component } from 'react';

let local = key => C => {
    return class HightOrderComponent extends Component {
        constructor() {
            super()
            this.state = { val: "" }
        }
        componentDidMount() {
            let val = localStorage.getItem(key) || "";
            this.setState({ val })
        }
        render() {
            return <C {...this.state} />
        }
    }
}
export default local

