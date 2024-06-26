import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./Menu"

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import style from './Contact.module.css'

import {useState} from 'react'

export const Contact = () => {
    const geoData = ({lat: -25.4249442, lng:-49.290757})

    const defaultPhoneNumber = "5541999999999"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mensage: ""
    })
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handlezap = () =>{
        const {name, email, mensage} = formData;

        const urlZapZap = `https //api.whatsapp.com/send? phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        E-mail:%20${email}%0D%0A
        Mensagem:%20${mensage}%0D%0A`

        window.open(urlZapZap, '_blank')
    }
    

    return(
        
        <>
         <Menu />
            <div className={style.sectionContact}>
                <h1>Contato</h1>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id='name' value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="mensage">mensagem</label>
                        <input type="text" id='mensage' value={formData.mensage} onChange={handleChange} required/>
                    </div>
                    <button onClick={handlezap}>Eviar mensagem</button>
                    <div>
                        <h2>Mapa</h2>
                        <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "500px"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[geoData.lat, geoData.lng]}>
                            <Popup>
                                <a target='_blank' href="https://www.google.com.br/maps/place/Col%C3%A9gio+Sesi+-+Unidade+Centro/@-25.4249442,-49.2907571,15z/data=!4m16!1m9!3m8!1s0x94dce43e26a836af:0xe6bf3c798353b759!2sCol%C3%A9gio+Sesi+-+Unidade+Centro!8m2!3d-25.4249647!4d-49.272303!9m1!1b1!16s%2Fg%2F1tdqcqpf!3m5!1s0x94dce43e26a836af:0xe6bf3c798353b759!8m2!3d-25.4249647!4d-49.272303!16s%2Fg%2F1tdqcqpf?entry=ttu"></a>
                                <p>R. Paula Gomes, 270 - São Framcisco, Curitiba - PR, 80510-070</p>
                            </Popup>
                        </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}