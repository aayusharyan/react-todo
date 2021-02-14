import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList(props) {
    const items = props.todos.map(function(single_todo) {
        return <TodoListItem key={single_todo.id} todo={single_todo} deleteTodo={props.deleteTodo} startEditing={props.startEditing} finishEditing={props.finishEditing}/>
    })
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default TodoList
