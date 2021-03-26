import {FiPlus} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
   return (
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMarkerImg} alt="Happy marcador"/>

               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita.</p>
            </header>

            <footer>
               <strong>Setúbal</strong>
               <span>Portugal</span>
            </footer>
         </aside>

         <MapContainer
            center={[38.5326482,-8.8789589]}
            zoom={14}
            style={{width: '100%', height: '100%'}}
         >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`} />
         </MapContainer>

         <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
         </Link>
      </div>
   )
}

export default OrphanagesMap
