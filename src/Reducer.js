import { ACTIONS } from "./Actions";



export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]


        default:
            return state;
    }

}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}
