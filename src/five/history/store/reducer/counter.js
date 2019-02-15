function counter(state={num:0},action) {
    switch (action.type) {
        case "ADD":
         return {...state,num:action.num+state.num}//{...state}展开是为了防止丢失属性
         case "MINUS":
         return {...state,num:state.num-action.num}
        default:
          return {...state}
    }
}
export default counter