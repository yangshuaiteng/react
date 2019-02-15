import React from 'react';//react核心包
import ReactDOM,{render} from 'react-dom';//将react渲染成dom元素的包

// ReactDOM.render(<h1>hello,world!</h1>,document.getElementById("root"))
// let ele=<h1 id='title'>hi,girl <span>your beautiful</span></h1>//jsx 通过babel调用React.createElement()转换成虚拟的dom元素（js对象）
// console.log(ele);


let ele=React.createElement("h1",{id:'title'},["",React.createElement('span',{id:'span1',key:'aa'},'oop')])
console.log(ele);

render(ele,document.getElementById("root"))
//render把虚拟的dom元素渲染成真实的dom元素
