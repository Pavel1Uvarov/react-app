import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const TodoListForm = ({ create }) => {
    const [item, setItem] = useState({title: ""})

    function newTodoItem() {
        const newItem = {
            id: Date.now(),
            ...item
        }
        create(newItem)
        setItem({...item, title: ""})
    }

    return (
        <div className="todo-list-form">
            <Input value={item.title}
                   onChange={e => setItem({...item, title: e.target.value})}
                   className="todo-list-field"
                   placeholder="Enter title"
            />
            <Button onClick={newTodoItem}>Add new task</Button>
        </div>
    );
};

export default TodoListForm;
