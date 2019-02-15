import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Provider extends Component{
    static childContextTypes={//定义传给子组件数据的类型
        store:PropTypes.object
    }
    getchildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children;
    }
}
