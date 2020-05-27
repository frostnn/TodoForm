import React, {useState} from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App: React.FunctionComponent = () => {
const [todos, setTodos] = useState([])
const addHandler = (title: string) => {
console.log(title)
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
