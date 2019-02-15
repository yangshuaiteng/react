function todo(state=[],action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,action.content]
        default:
           return [...state]
    }
}
export default todo