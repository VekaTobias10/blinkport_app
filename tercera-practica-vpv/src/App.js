import './App.css';
import React from 'react';
import LandingPage from './pages/landing';
import ModalPage from './pages/modal';
<<<<<<< HEAD
<<<<<<< HEAD
import RegisterData from './pages/register/index';


=======
import RegisterData from './pages/register/index'
import "@fontsource/roboto";
>>>>>>> main
=======

import RegisterData from './pages/register/index';




import "@fontsource/roboto";

>>>>>>> ba42ad91ef1472af59c2f11e23c4e28d89e3a205
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
