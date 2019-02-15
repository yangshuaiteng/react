/* 
react组件：函数组件、类组件

组件与元素的区别：组件名首字母大写

函数组件：没有this，没有状态，接收数据时通过props来接收
类组件:有this、有状态，通过state来设置的( 用的比较多)【有状态可以更改数据，数据发生改变视图会重新渲染，界面呈现出新的效果】
*/
import React from 'react';
import ReactDOM from 'react-dom';
//1、声明组件
//props来接收组件的属性(props 接收的数据只能获取不能更改)
function Clock(props) {//{name:"zf",age:9}
// console.log(props);

    return (
        <div>
            <h1>Hello,world!{props.name}{props.age}</h1>
            <h2>It is{new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

//由于react元素一旦创建就不可更改，只能重新创建react元素
//由于重新创建react元素消耗性能比较大【react优化 DOM-diff计算，只有更改的react元素才会重新创建，若没有更改还是用原来的】
let obj={name:'yst',age:23}
setInterval(() => {
    //2、渲染组件
    ReactDOM.render(
    <div>
<Clock name="zf" age="9"/>
<Clock {...obj}/>
    </div>
    , window.root)
}, 1000);
