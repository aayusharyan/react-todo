import React from 'react'

function TodoAdd(props) {
    let TodoValue = "";
    const submitTodo = () => {
        if(TodoValue.trim()) {
            props.addTodo(TodoValue);
            TodoValue = "";
            document.getElementById("task").value = "";
        }
    }
    const updateTodoValue = e => {
        TodoValue = e.target.value;
    }
    return (
        <div>
            <textarea id="task" onChange={updateTodoValue} ></textarea>
            <br />
            <button id="btn" onClick={submitTodo}>Add New</button>
        </div>
    )
}

export default TodoAdd
