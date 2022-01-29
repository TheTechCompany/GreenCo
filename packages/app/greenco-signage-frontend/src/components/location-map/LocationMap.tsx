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

const markersArray = [[-36.9915, 174.8734], [-36.8807, 174.7981]];


export const LocationMap : React.FC<LocationMapProps> = (props) => {
	const [ bounds, setBounds ] = useState<any>(props.markers || [])
	

	useEffect(() => {

		{console.log(props.markers)}

		// let bounds = L.latLngBounds(props.markers.map((x) => [parseFloat(x.lat || '0'), parseFloat(x.lng || '0')]))

		setBounds(bounds);

	}, [props.markers])

	return (
		<Box flex>
				<MapContainer center={[-36.9915, 174.8734]} bounds={bounds.length>0 ? bounds : undefined}  style={{flex: 1}} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{props.markers.map((marker) => (
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