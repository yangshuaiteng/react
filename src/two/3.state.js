import React from 'react';
import ReactDOM from 'react-dom';
//点击按钮每次显示累加2，但是状态每次累加1
class Hello extends React.Component {
    constructor() {
        super();
        this.state = { index: 0 }
    }
    handleClick = () => {
        console.log(this);
        //若参数是对象，设置多个setState会合并,函数则不会合并【不知道他什么时候执行，不确定是同步或者是异步】
        // this.setState({ index: this.state.index + 1 })
        // this.setState({ index: this.state.index + 1 })//会合并



        //setState方法运行时传的参数有两种：对象，函数
        //如果下面的状态要依赖于上面的状态，setState参数得是函数
        /* this.setState(prevState=>({//====》({})直接返回一个对象
            index:prevState.index+1
        }))
        this.setState(prevState=>({
            index:prevState.index+1
        })) */



        this.setState({ index: this.state.index + 1 }, () => {
            this.setState({ index: this.state.index + 1 })
        })
        /* 相当于两步
        1、this.setState({ index: this.state.index + 1 })
        2、this.setState(prevState=>({//====》({})直接返回一个对象
        index:prevState.index+1
    })) */
    }

    render() {
        return <div>{this.state.index}<button onClick={this.handleClick}>add</button></div>
    }
}



ReactDOM.render(<Hello />, window.root)