import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

import mapMakerImg from '../images/map-marker.svg';
function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            
            <Map
                center={[-23.4027282,-46.7381793]}
                zoom={15}
                style={{width: "100%", height: "100%"}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to=" " className="create-orphanage">
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;