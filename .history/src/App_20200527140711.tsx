import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';





const App: React.FunctionComponent = () => {
 
    return (
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodosPage}/>
            <Route path="/About" component={AboutPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
