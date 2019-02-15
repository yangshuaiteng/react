import * as actionTypes from '../action-Types';
let initState = { type: "all", todos: [{ id: 1, isSelected: false, content: "今天你微笑了吗？" }, { id: 2, isSelected: true, content: "今天你努力了吗？" }] }
function todo(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return { ...state, todos: [...state.todos, action.content] };
        case actionTypes.DELETE:
            let todos2 = state.todos.filter(item => item.id !== action.id)
            return { ...state, todos: [...todos2] };
        case actionTypes.CHANGE_SELECTED:
            let todos3 = state.todos.map(item => {
                if (item.id === action.id) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
            return { ...state, todos: [...todos3] };
        case actionTypes.CHANGE_TYPE:
            return { ...state, type: action.val }
    }
    return { ...state };
}
export default todo