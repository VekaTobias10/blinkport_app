import './App.css';
import React from 'react';
import LandingPage from './pages/landing';
import ModalPage from './pages/modal';

import RegisterData from './pages/register/index';




import "@fontsource/roboto";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (


    <React.Fragment>
      <Router>
        <Switch>
      <Route path='/login'>
         <RegisterData></RegisterData>
      </Route>
      
      <Route path='/register'>
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
