import React, { useReducer, useState } from 'react'
import { ACTIONS } from './Actions';
import { reducer } from './Reducer';




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
        </>
    )
}

export default ToDos;