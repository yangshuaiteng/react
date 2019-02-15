import * as Types from '../action-types';
let add=(num)=>{//action creator
    return {type:Types.ADD,number:num}
}
let minus=num=>{return {type:Types.MINUS,number:num}};
export {add,minus}