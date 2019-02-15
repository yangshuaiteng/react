import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import a from './img/1.jpg';
import b from './img/2.jpg';
import c from './img/3.jpg';
import Slider from './slider'
let item=[{src:a},{src:b},{src:c}]
ReactDOM.render(<Slider item={item} autoPlay={true} arrow={true} dots={true} duration={2} speed={0.5} />,window.root)