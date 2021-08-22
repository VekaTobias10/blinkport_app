<<<<<<< Updated upstream
import React from 'react';
import PriceCardLanding from '../components/landing-components/price-section/price-section';


function LandingPage (){
   return (
       <React.Fragment>
        {/* aqui van nuestros componentes por orden */}


       <PriceCardLanding></PriceCardLanding>
       </React.Fragment>
   );
=======
import React from "react";
import "./styles.css";
import Header from "../components/header/header";
import ImageSection from "../components/landing-components/home-visual-section";
// import PriceCardLanding from "../components/landing-components/price-section/price-section";

function LandingPage() {
  return (
    <React.Fragment>
      <Header></Header>
      <ImageSection></ImageSection>
      {/* <PriceCardLanding></PriceCardLanding> */}
    </React.Fragment>
  );
>>>>>>> Stashed changes
}

export default LandingPage;
