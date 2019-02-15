import React from 'react';

export default class SliderList extends React.Component {
    constructor() {
        super();
    }
    render() {
        let style={
            left:-400*this.props.index+'px',
            transitionDuration:`${this.props.speed}s`,
            width:(this.props.item.length+1)*400+"px"
        }
        return <ul className="slider-list" style={style} ref="ul">
        {this.props.item.map((item,index)=>{
            return <li key={index}><img src={item.src} alt=""/></li>
        })}  
        <li><img src={this.props.item[0].src} alt=""/></li>
        </ul>
    }
}







