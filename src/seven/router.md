SPA(单页面应用) 通过路由渲染不同的组件，让其显示
路由的模式
HashRouter  根据hash（#）部分取创建【http://locallhost:300/#user】如果路由不存在不会报错
BrowserRouter  根据H5 history api
BrowserRouter 采取restful接口的风格，需要后台接口配合【http://locallhost:300/user】如果直接请求这个地址，若后台没有这个接口会报错

Route根据路由配置渲染的组件
##根据路由显示不同的内容
/home=>Home
/user=>User
/Profile->Profile

exact精准匹配  
用户每一条信息包含,id值和用户名，所有的信息是放入到一个数组中存入localStorage里