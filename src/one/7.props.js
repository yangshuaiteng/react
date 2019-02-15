import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
//props用来接收数据  propTypes检查接收到的数据
class Hello extends React.Component {
    constructor() {
        super();
    }
    static defaultProps={//设置属性的默认值（不传值的时候好使）静态属性
        name:'lucy'
    }
    static propTypes={
        name:PropTypes.string.isRequired //name属性必须传
        //要求传的属性值array、bool、func、number、object、string、symbol
    }

    render() {
        return <div>
            <h1>hello,{this.props.name}</h1>
        </div>
    }
}
ReactDOM.render(<Hello/>, window.root)