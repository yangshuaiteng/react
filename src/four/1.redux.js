// redux  是管理状态的一个js容器
//redex是独立的框架。可以跟js,jq,react组合
//redex 工作模式（js代码理解redux工作原理）
let state={
    title:{text:'标题',color:'red'},
    content:{text:'内容',color:"yellow"}
};
function renderTitle() {
    let title=document.querySelector(".title");
    title.innerHTML=state.title.text;
    title.style.color=state.title.color
}
function renderContent() {
let content=document.querySelector(".content");
content.innerHTML=state.content.text;
content.style.color=state.content.color
}
function renderApp() {//把组件渲染到根DOM元素上，渲染视图部分
renderTitle();
renderContent()
}
renderApp()