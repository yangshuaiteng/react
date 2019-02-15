import * as Types from '../action-types';
let todo=(thing)=>{
    return {type:Types.TODO,todo:thing}
}
export {todo}