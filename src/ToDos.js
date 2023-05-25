import React, { useReducer, useState } from 'react'
import { ACTIONS } from './Actions';

const ToDos = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
        </>
    )
}

export default ToDos