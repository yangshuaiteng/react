// redux  是管理状态的一个js容器
//redex是独立的框架。可以跟js,jq,react组合
//redex 工作模式（js代码理解redux工作原理）
let state = {
    title: { text: '标题', color: 'red' },
    content: { text: '内容', color: "yellow" }
};
function renderTitle() {
    let title = document.querySelector(".title");
    title.innerHTML = state.title.text;
    title.style.color = state.title.color
}
function renderContent() {
    let content = document.querySelector(".content");
    content.innerHTML = state.content.text;
    content.style.color = state.content.color
}
let CHANGE_TITLE = "CHANGE_TITLE"
function dispatch(action) {
    //action参数是一个对象{type:""}，对象中必须有一个属性type
    switch (action.type) {
        case CHANGE_TITLE:
            state = {
                ...state, title: { ...state.title, text: action.text }
            }
    }
}
function renderApp() {//把组件渲染到根DOM元素上，渲染视图部分
    renderTitle();
    renderContent()
}
renderApp()
window.setTimeout(() => {
    dispatch({ type: CHANGE_TITLE, text: "Hello" })
    renderApp()
}, 1000)