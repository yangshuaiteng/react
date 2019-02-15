/* let ele = createElement('h1', { id: 'title' }, 'hello')
console.log(ele); */
let ele2 = createElement('h1', { id: 'title' }, 'hello', createElement('span', { id: 'name' }, 'world'))
console.log(ele2);



//转换成虚拟的dom元素
function createElement(type, props, ...children) {
    if (children.length === 1 && typeof children[0] !== "object") {
        return { type, props: { ...props, children: children[0] } }
    } else {
        return { type, props: { ...props, children: [...children] } }
    }
}






//把虚拟的dom元素转换成真实的dom元素，并挂载到根DOM元素下
function render(obj, root) {
    let { type, props } = obj;
    let ele = document.createElement(type);
    for (const key in props) {
        if (key === "children") {//props[key]属性值
            if (typeof props[key] == 'object') {//props[key]是一个数组
                props[key].forEach((item, index) => {
                    if (typeof item === "string") {
                        ele.innerHTML = item
                    } else if (typeof item === 'object') {
                        render(item, ele)//递归调用
                    }
                })
            } else {
                ele.innerHTML = props[key]
            }
        } else if (key === "className") {
            ele.setAttribute("class", props[key])
        }else {
            ele.setAttribute(key, props[key])
        }
    }
    root.appendChild(ele)
}
render(ele2, window.root)
