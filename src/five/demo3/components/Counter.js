import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/counter'
class Counter extends React.Component {
    render() {
        return <div>
            {this.props.count.number}
            <button onClick={()=>{this.props.add(2)}}>+</button>
            <button onClick={()=>{this.props.minus(2)}}>-</button>
        </div>
    }
}
let mapStateToProps = state => { return { count: state.counter } }

export default connect(mapStateToProps, actions)(Counter)