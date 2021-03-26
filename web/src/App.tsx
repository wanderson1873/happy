import React from 'react';

import './styles/global.css'
import './styles/pages/landing.css'

import logoImage from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImage} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanato e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Setúbal</strong>
          <span>Portugal</span>
        </div>

        <a href="" className="enter-app">
          »
        </a>
      </div>
    </div>
  );
}

export default App;
