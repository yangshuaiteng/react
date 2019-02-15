import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import a from './imgs/1.jpg'
import b from './imgs/2.jpg'
import c from './imgs/3.jpg'
import Slider from './slider'

let item=[{src:a},{src:b},{src:c}]
ReactDOM.render(<Slider item={item} autoPlay={true} arrows={true} dots={true} duration={2} speed={0.5}/>, window.root)