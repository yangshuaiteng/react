import React from 'react'
export default class SliderArrow extends React.Component{
constructor(){
super();
}
render(){
return <div className="sliderArrow">
<span onClick={()=>{this.props.go(-1)}}>&lt;</span>
<span onClick={()=>{this.props.go(1)}}>&gt;</span>
</div>
}
}