import React from 'react';
import SliderArrows from './sliderArrows'
import SliderDots from './sliderDots'
import SliderList from './sliderList'
export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = { index: 0 }
    }
    turn = () => {
        this.timer = window.setInterval(() => {
            this.go(1)//设置现在要显示的索引
        }, this.props.duration * 1000)
    }
    go = (step) => {
        let index = this.state.index + step
        if (index === this.props.item.length + 1) {
            this.oUl.style.transitionDuration = '';
            this.oUl.style.left = 0;
            window.setTimeout(() => {
                index = 1
                this.oUl.style.transitionDuration = `${this.props.speed}s`;
                this.setState({ index })
            }, 30)
            return
        }
        if (index < 0) {
            this.oUl.style.left = -400 * this.props.item.length + "px";
            this.oUl.style.transitionDuration = "";
            window.setTimeout(() => {
                index = this.props.item.length - 1;
                this.oUl.style.transitionDuration = `${this.props.speed}s`;
                this.setState({ index })
            }, 30)
            return
        }
        this.setState({ index })
    }
    componentDidMount() {
        if (this.props.autoPlay) {
            this.turn()
        }
        this.oUl = this.refs.list.refs.ul
    }
    render() {
        return <div className="slider" onMouseEnter={() => { clearInterval(this.timer) }} onMouseLeave={() => { this.turn() }}>
            <SliderList item={this.props.item} index={this.state.index} speed={this.props.speed} ref="list" />
            {this.props.arrows ? <SliderArrows go={this.go} /> : null};
        {this.props.dots ? <SliderDots item={this.props.item} index={this.state.index} go={this.go} /> : null}
        </div>
    }
}







