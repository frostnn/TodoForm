import React, {useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';


const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev =>  [newTodo, ...prev])
  }
    const toggleHandler = (id: number) => {
      setTodos(prev => prev.map(todo => {
        if(todo.id === id) {
          todo.completed = true
        }
        return todo
      })
      )
    }
    
    const removeHandler = (id: number) => {
      const shoudRemove = confirm("Вы точно хотите удалить элемент?")
      if(shoudRemove){
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    }
  return (
    <>
        <TodoForm onAdd={addHandler}/>
        <TodoList 
          todos={todos}
          onToggle={toggleHandler} 
          onRemove={removeHandler}
        />
   </>
  )
}

export default TodosPage;