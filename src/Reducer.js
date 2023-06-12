import { ACTIONS } from "./Actions";



export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return state.map(todolist => {
                if (todolist.id === action.payload.id) {
                    return { ...todolist, complete: !todolist.complete }
                }
                return todolist;
            })
        case ACTIONS.DELETE_TODO:
            return state.filter(item => item.id !== action.payload.id)

        default:
            return state;
    }

}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}
