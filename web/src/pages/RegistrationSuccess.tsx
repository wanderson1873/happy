import '../styles/pages/registration-success.css'
import {Link} from 'react-router-dom'
import imageSuccess from '../images/registration-success.svg'

const RegistrationSuccess = () => {
   return (
      <div id="page-registration-success">
         <div className="content-wrapper">
            <main>
               <h1>Ebaaa!</h1>
               <p>Seu cadastro foi realizado com sucesso.</p>
               <Link to="/app">
                  Voltar para o mapa
               </Link>
            </main>

            <div>
               <img src={imageSuccess} alt="Imagem com garota feliz"/>
            </div>

         </div>
      </div>
   )
}

export default RegistrationSuccess
