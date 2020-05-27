import React from 'react';
import { ITodo } from '../interfaces';
type TodoListProps = {
  todos: ITodo[],

}
const TodoList: React.FunctionComponent<TodoListProps> = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if(todo.completed){
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}/>
              <span>{todo.title}</span>
              <i className="material-icons red-text">Delete</i>
            </label>
          </li>
        )
      })}
  
    </ul>
  );
}

export default TodoList;