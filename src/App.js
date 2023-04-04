import './App.css';
import TodoList from "./components/TodoList/TodoList";
import TodoListForm from "./components/TodoListForm/TodoListForm";
import {useState} from "react";

function App() {
  const [items, setItem] = useState([
    {id: 1, title: 'First Todo', body: 'My First todo'}
  ]);

  const createNewItem = (newItem) => {
    setItem([...items, newItem])
  }

  return (
    <div className="App">
      <div className="app-bg"></div>
        <TodoListForm create={createNewItem}/>
        <TodoList items={items} />
    </div>
  );
}

export default App;
