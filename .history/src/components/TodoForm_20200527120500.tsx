import React, {useRef} from 'react';

interface TodoFormProps{
  onAdd(title: string): void
}

const ref = useRef<HTMLInputElement>(null);
const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }
  return (
    <>
     
      <div className="input-field">
        <input 
          onKeyPress={KeyPressHandler}
         ref={ref}
          type="text" 
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