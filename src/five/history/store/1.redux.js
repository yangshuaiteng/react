function createStore(reducer) {
  let state;
  let linsteners=[]
  let dispatch=action=>{
      state=reducer(state,action);
      linsteners.forEach(fn=>fn());
  }
  let getState=()=>JSON.parse(JSON.stringify(state));
  dispatch({})
  let subscribe=(fn)=>{//fn指订阅的函数，放入到事件池中
    linsteners.push(fn);
   return ()=>{linsteners=linsteners.filter(item=>item!==fn)} 
  }
  return {getState,dispatch,subscribe}
}
let combineReducers=(reducers)=>{
  return (state={},action)=>{
      let obj={}
      for (const key in reducers) {
         obj[key]=reducers[key](state[key],action)
      }
      return obj
  }
}

export {createStore,combineReducers}