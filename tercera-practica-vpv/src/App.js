import './App.css';
import React from 'react';
import LandingPage from './pages/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import ModalPage from './pages/modal';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>   
      <Route path='/registration'>
      <ModalPage></ModalPage>
      </Route> 
      <Route path='*'> 
     <LandingPage></LandingPage>
      </Route>
    </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
