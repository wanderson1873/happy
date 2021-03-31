import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'
import Orphanage from './pages/Orphanage'
import RegistrationSuccess from './pages/RegistrationSuccess'

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanage/:id" component={Orphanage} />
            <Route path="/registration-success" component={RegistrationSuccess} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes