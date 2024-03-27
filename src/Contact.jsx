import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./components/Menu"

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const Contact = () => {
    const geoData = ({lat: -25.4249442, lng:-49.290757})
    const position = [-25.4249442, -49.290757]
    return(
        
        <>
         <Menu />
            <div>
                <h1>Contato</h1>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "500px"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[geoData.lat, geoData.lng]}>
                            <Popup>
                                <a target='_blank' href="https://maps.app.goo.gl/ToQVRTjELC8XHtA1A"></a>
                                <p></p>
                            </Popup>
                        </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}