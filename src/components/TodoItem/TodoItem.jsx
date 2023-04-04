import React from 'react';
import Input from "../UI/Input/Input";

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <Input type="checkbox" />
            <h2>{props.title}</h2>
        </div>
    );
};

export default TodoItem;
