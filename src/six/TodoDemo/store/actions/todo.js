import * as actionTypes from '../action-Types';
let obj={
    add:content=>{
        return {type:actionTypes.ADD,content}
    },
    delete:id=>{
        return {type:actionTypes.DELETE,id}
    },
    changeSelected:id=>{
        return {type:actionTypes.CHANGE_SELECTED,id}
    },
    changeType:val=>{//指的是type类型值（all.finish.unfinish）
        return {type:actionTypes.CHANGE_TYPE,val}
    
    }
}
export default obj