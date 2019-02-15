import React from 'react';
import ReactDOM from 'react-dom';
//初始化阶段：static defaultProps=》constructor=》componentWillMount=》render=》componentDidMount
//如果有子组件：state defaultProps=》constructor=》componentWillMount=》render=》子组件的【state defaultProps=》constructor=》componentWillMount=》render=》componentDidMount】=》componentDidMount
/* 
1.第一步首先是static defaultProps，设置默认值，这里面设置的默认值会把属性放到实例的props属性上，如果实例中有这个属性值，不再使用这里面设置的默认值；如果没有才会用这个默认值
2.constructor在这里面设置状态，设置完状态会执行componentWillMount
3.componentWillMount，组件将要挂载之前执行的钩子函数【只在组件初始化时调用，整个生命周期只调用一次，此时可以修改state】【setState在这里面是同步的，设置不成功不继续执行下面的钩子函数，不设置没关系】
4.render方法，render是组件正在挂载【这里面不能改state,如果组件进行更新就会触发render方法】
5.组件挂载完之后执行componentDidMount，这个是组件挂载完成之后调用的钩子函数，整个生命周期只调用一次【这里面经常操作dom元素】
*/

//更新阶段：shouldComponentUpdate=》componentWillUpdate=》rendere=》componentDidUpdate
//如果有子组件：shouldComponentUpdate=》componentWillUpdate=》rendere=》子组件的【componentWillReceiveProps=》shouldComponentUpdade=》componentWillUpdate=》render=》componentDidUpdate】=》componentDidUpdate
/* 
！！！！！componentWillReceiveProps，组件初始化时不调用，这里面有一个参数，nextProps：组件接收新的props时调用
1.当数据更新时会先触发shouldComponentUpdate,这个钩子函数有两个参数（nextProps:下一次的属性,nextState：下一次的状态）这个钩子函数必须返回一个布尔值，返回的为ture继续执行下面的钩子函数，返回为false下面的钩子函数都不会触发【在这个钩子函数里面可以做性能优化，组件接收新的state或者props时调用，可以对比前后两个props和state是否相同，如果相同返回false阻止更新，这样会节省大量性能】返回true执行下面的钩子函数
2.componentWillUpdate：组件将要更新时执行，这个钩子函数有两个参数（nextProps：下一次的属性，nextState:下一次的状态），组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
3.render组件渲染
4.componentDidUpdate:组件更新完成时调用的钩子函数，组件初始化时不调用，组件更新完成后进行调用，此时可以获取dom元素
*/

//销毁阶段
/* 
componentWillUnmount组件将要销毁
ReactDOM.unmountComponentAtNode(window.root)让他执行会销毁
*/



class Hello extends React.Component {
    static defaultProps = {
        name: "zf",
        oop: 997
    }
    constructor() {
        super();
        this.state = { num: 100 }
        console.log("1.父组件constructor");
    }
    componentWillMount() {
        // console.log(this.props);

        console.log("2.父组件将要渲染componentWillMount");
    }
    componentDidMount() {
        console.log("4.父组件渲染完成componentDidMount");
    }
    handleClick = () => {
        this.setState({ num: this.state.num + 1 })
        ReactDOM.unmountComponentAtNode(window.root)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps,nextState);
        console.log("5.父组件shouldComponentUpdate");

        return true
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log(nextProps,nextState);
        console.log("6.父组件componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("7.父组件componentDidUpdate");
    }
    componentWillReceiveProps(a) {
         console.log(a);
         
        console.log("父组件componentReceiveProps");

    }
    componentWillUnmount(){
        console.log("end-componentWillUnmount");
        
    }
    render() {
        console.log("3.父组件组件渲染render");
        return <div>
            {this.state.num}
            {this.props.li.age}
            <button onClick={this.handleClick}>按钮</button>
            <Child m={this.props.li}/>
        </div>
    }
}
class Child extends React.Component {
    constructor() {
        super();
        this.state={}
        console.log("1.子组件constructor");

    }
    componentWillReceiveProps(a) {
        console.log(a);
        
        console.log("子组件componentWillReceiveProps");
    }
    componentWillMount() {
        // console.log(this.props);

        console.log("2.子组件将要渲染componentWillMount");
    }
    componentDidMount() {
        console.log("4.子组件渲染完成componentDidMount");
    }
    handleClick = () => {
        this.setState({ num: this.state.num + 1 })
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps,nextState);
        console.log("5.子组件shouldComponentUpdate");

        return true
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log(nextProps,nextState);
        console.log("6.子组件componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("7.子组件componentDidUpdate");
    }

    render() {
        console.log("3.子组件组件渲染render");
        return <div>
        {this.props.m.age}
        </div>
    }
}
let obj = { age: 23 }
ReactDOM.render(<Hello li={obj} />, window.root)