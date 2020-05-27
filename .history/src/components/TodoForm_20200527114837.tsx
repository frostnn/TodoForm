import React, {useState, ChangeEvent} from 'react';



const TodoForm: React.FunctionComponent = () => {

  const [title, setTitle] = useState<string>();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      setTitle('')
    }
  }
  return (
    <>
     
      <div className="input-field">
        <input 
          onKeyPress={KeyPressHandler}
          onChange={changeHandler} 
          value={title} type="text" 
          id="title" 
          placeholder="Введите название дела..."/>
        <label htmlFor="title" className="active">
          Введите название дела
        </label>
      
      
      </div>
    </>
  );
}

export default TodoForm;