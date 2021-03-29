import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

const mapIcon = Leaflet.icon({
   iconUrl: mapMarkerImg,
   iconSize: [58, 68],
   iconAnchor: [29,68],
   popupAnchor: [170, 2]
})

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

            <Marker
               icon={mapIcon}
               position={[38.5326482,-8.8789589]} 
            >
               <Popup 
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
               >
                  Lar das meninas
                  <Link to="/orphanage/1">
                     <FiArrowRight size={20} color="#FFF" />
                  </Link>
               </Popup>
            </Marker>

            
         </MapContainer>

         <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
         </Link>
      </div>
   )
}

export default OrphanagesMap
