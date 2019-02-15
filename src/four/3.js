// redux  是管理状态的一个js容器
//redex是独立的框架。可以跟js,jq,react组合
//redex 工作模式（js代码理解redux工作原理）
let initState = {
    title: { text: '标题', color: 'red' },
    content: { text: '内容', color: "yellow" }
};
let CHANGE_TITLE = "CHANGE_TITLE"

function createStore() {//创建一个作用域，相当于一个隔离的作用域，为了防止用户直接修改数据
    let state = initState
    //getState获取更改状态后的值
    let getState = () => JSON.parse(JSON.stringify(state))//深度克隆数据
    function dispatch(action) {
        //action参数是一个对象{type:""}，对象中必须有一个属性type
        switch (action.type) {
            case CHANGE_TITLE:
                state = { ...state, title: { ...state.title, text: action.text } }
        }
    }
    dispatch({})//获取初始化的state值
    return {
        getState,
        dispatch
    }
}

let store = createStore()
function renderTitle() {
    let title = document.querySelector(".title");
    title.innerHTML = store.getState().title.text;
    title.style.color = store.getState().title.color
}
function renderContent() {
    let content = document.querySelector(".content");
    content.innerHTML = store.getState().content.text;
    content.style.color = store.getState().content.color
}

function renderApp() {//把组件渲染到根DOM元素上，渲染视图部分
    renderTitle();
    renderContent()
}
renderApp()
window.setTimeout(() => {
    store.dispatch({ type: CHANGE_TITLE, text: "Hello" })
    renderApp()
}, 1000)
