import React from 'react';
import NavBar from './components/NavBar';
import TodosPage from './pages/TodosPage'




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
