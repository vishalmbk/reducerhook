import React from 'react'

const ToDoList = ({ todo }) => {
    return (
        <>
            <div>
                <span>{todo.name}</span>
                <button>Toggle</button>
                <button>Delete</button>
            </div>
        </>
    )
}

export default ToDoList;