import { Box } from 'grommet';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import marker from 'leaflet/dist/images/marker-icon.png'
import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x, 
    iconUrl: marker,
    shadowUrl: markerShadow
});

// const myIcon = L.icon({
// 	iconUrl: marker, //require('../assets/marker.svg'),
// 	iconSize: [32,42],
// 	iconAnchor: [16, 42]
// });

export interface LocationMapProps {

}

export const LocationMap : React.FC<LocationMapProps> = (props) => {
	return (
		<Box flex>
			<MapContainer style={{flex: 1}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			</MapContainer>
		</Box>
	)
}