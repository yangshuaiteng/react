import React from 'react';
import ReactDOM from 'react-dom';
let ary=[{name:'vue',price:100},{name:'react',price:200}]
// let toLesson=item=>`当前课程是${item.name},当前课程价格是${item.price}`
let toLesson=item=>{
    return <div>
        <span>当前课程是{item.name}</span>
        <em>当前课程价格是{item.price}</em>
    </div>
}

ReactDOM.render(
    <ul>
    {ary.map((item,index)=>{
        return <li key={index}>
            {toLesson(item)}
        </li>
    })}
    </ul>
    ,window.root)