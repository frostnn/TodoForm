import React from 'react';
import NavBar from './components/NavBar';
import TodosPage from './pages/TodosPage'


declare var confirm: (question: string) => boolean

const App: React.FunctionComponent = () => {
 
    return (
      <>
        <NavBar/>
        <div className="container">
         <TodosPage/>
        </div>
      </>
    );
}

export default App;
