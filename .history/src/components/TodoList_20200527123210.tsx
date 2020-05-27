import React from 'react';
import { ITodo } from '../interfaces';
type TodoListProps = {
  todos: ITodo[],

}
const TodoList: React.FunctionComponent<TodoListProps> = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li className="todo">
            <label>
              <input type="checkbox"/>
              <span></span>
              <i className="material-icons red-text">Delete</i>
            </label>
          </li>
        )
      })}
  
    </ul>
  );
}

export default TodoList;