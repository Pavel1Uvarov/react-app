import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {
                props.items.map((item) => (
                    <TodoItem key={item.id} title={item.title} body={item.body} />
                ))
            }
        </div>
    );
};

export default TodoList;
