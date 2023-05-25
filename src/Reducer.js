import { ACTIONS } from "./Actions";
import ToDos from "./ToDos";


export const Reducer = (state, actions) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...ToDos, newTodo(name)]
            break;

        default:
            break;
    }

}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}