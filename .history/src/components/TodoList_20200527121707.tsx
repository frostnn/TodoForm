import React from 'react';
type TodoListProps = {
  todos: any[],

}
const TodoList: React.FunctionComponent = ({todos}) => {
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