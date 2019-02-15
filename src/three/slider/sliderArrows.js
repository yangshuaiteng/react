import React from 'react';
export default class SliderArrows extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="slider-arrow">
        <span onClick={()=>{this.props.go(-1)}}>&lt;</span>
        <span onClick={()=>{this.props.go(1)}}>&gt;</span>
        </div>
    }
}







