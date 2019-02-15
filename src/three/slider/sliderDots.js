import React from 'react';
export default class SliderDits extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return <ul className="slider-dots">
            {this.props.item.map((item,index)=>{
                return <li key={index} className={index===this.props.index||this.props.index===this.props.item.length&&index==0?"active":""} onClick={()=>{
                    this.props.go(index-this.props.index)
                }}>=</li>
            })}
        </ul>
    }
}







