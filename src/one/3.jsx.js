import React from 'react';
import ReactDOM from 'react-dom';

let obj={name:'zhufeng',age:9}
let ele=<h1>姓名：{obj.name}；年龄：{obj.age}</h1>
ReactDOM.render(ele,window.root)



//jsx注意事项
/*
 1、<{区分是html还是js，js表达式是放在{}里 
 2、js表达式可以是变量，三元运算符、函数返回值(放函数的执行、并且函数有返回值)、数组（数组里不能有对象），不能放对象、函数本身
 3、如果有多个jsx元素，最外层需要有个标签包着
 4、属性名不能和关键词冲突 class===》className  for===>htmlFor属性名遵循驼峰式写法
 5、行内样式要放在对象里，然后放在{}里
 6、return后若换行需要拿小括号包起来

 */