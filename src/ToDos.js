import React, { useReducer, useState } from 'react'
import { ACTIONS } from './Actions';
import { reducer } from './Reducer';
import ToDoList from './ToDoList';




const ToDos = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }
    console.log(todos)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <ToDoList key={todo.id} todo={todo} dispatch={dispatch} />
            })
            }
        </>
    )
}

export default ToDos;