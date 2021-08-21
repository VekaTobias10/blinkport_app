import './App.css';
import CarrouselContainer from './components/carousel-container';
import React from 'react';
import LandingPage from './pages/landing';
import Header from './header/header'


function App() {
  return (
    <div className="App">
       <Header></Header>
      <CarrouselContainer></CarrouselContainer>
      <LandingPage></LandingPage>        
    </div>
  );
}

export default App;
