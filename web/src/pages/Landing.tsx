import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './../styles/pages/landing.css'

import logoImage from './../images/logo.svg'

const Landing = () => {
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

            <Link to="/app" className="enter-app">
               <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
         </div>
      </div>
   )
}

export default Landing
