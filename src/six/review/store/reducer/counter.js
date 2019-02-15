import * as Types from '../action-types';
let counter = (state = { number: 0 }, action) => {//state指自己组件要的状态值的类型{number:0}
    switch (action.type) {
        case Types.ADD:
            return { ...state, number: state.number+action.number}
        case Types.MINUS:
            return { ...state, number: state.number-action.number }
    }
    return { ...state }
}
export default counter