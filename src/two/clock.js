import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super()
        this.state={time:new Date().toLocaleString()}
        this.timer=null
        // console.log(this.props); 
    }
    componentDidMount(){
        this.timer=window.setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
    }
    componentWillMount(){
        clearInterval(this.timer);
        this.timer=null
    }
    render(){//这里的props直接可以用this.props【props不用传】
        // console.log(this);
        return <div>{this.state.time}{this.props.age}</div>
    }
}

let obj={age:23}
ReactDOM.render(<Clock {...obj}/>,window.root)