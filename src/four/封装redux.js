function createStore(reducer) {
    let state;
    let listeners=[]
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach(item=>item())//发布  渲染视图
    }
    dispatch({});
    let getState=()=>JSON.parse(JSON.stringify(state));
    let subscribe=(fn)=>{//订阅函数，把订阅的函数放入到事件池当中
        listeners.push(fn);
        return  ()=>{listeners=listeners.filter(item=>item!==fn)}
    }
    return {
        dispatch,getState,subscribe
    }
}
export {createStore};