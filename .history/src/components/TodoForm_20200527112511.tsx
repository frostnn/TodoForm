import React from 'react';



const TodoForm: React.FunctionComponent = () => {
  return (
    <>
     
      <div className="input-field">
        <input type="text" id="title" placeholder="Введите название дела..."/>
        <label htmlFor="title" className="active">
          Введите название дела
        </label>
      
      
      </div>
    </>
  );
}

export default TodoForm;