'use client'

import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import MarkerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: MarkerIcon.src,
  iconRetinaUrl: MarkerIcon2x.src,
  shadowUrl: MarkerShadow.src,
})

interface Props {
  center?: number[]
}
const Map = ({ center }: Props) => {
  console.log('center', center)
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  )
}
export default Map
