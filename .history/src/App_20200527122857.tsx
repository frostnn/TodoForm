import React, {useState} from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';


const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: true
    }
    setTodos([newTodo, ...todos])
  }

    return (
      <>
        <NavBar/>
        <div className="container">
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos}/>
        </div>
      </>
    );
}

export default App;
