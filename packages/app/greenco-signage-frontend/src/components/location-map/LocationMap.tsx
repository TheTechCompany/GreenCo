import { Box } from 'grommet';
import React, { useEffect, useMemo, useState } from 'react';
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
	markers: {lat?: string, lng?: string}[]
}

//bounds={[[-36.9915, 174.8734], [-36.8807, 174.7981]]}
export const LocationMap : React.FC<LocationMapProps> = (props) => {
	const [ bounds, setBounds ] = useState<any>()

	useEffect(() => {
		let bounds = L.latLngBounds(props.markers.map((x) => [parseFloat(x.lat || '0'), parseFloat(x.lng || '0')]))
		setBounds(bounds);
	}, [props.markers])

	console.log(bounds)
	return (
		<Box flex>
				<MapContainer center={[-36.8807, 174.7981]} zoom={13}  style={{flex: 1}} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{props.markers.filter((a) => a.lat && a.lng).map((marker) => (
				<Marker position={[parseFloat(marker.lat || '0'), parseFloat(marker.lng || '0')]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
				</Marker>
			))}
			</MapContainer>
		</Box>
	)
}