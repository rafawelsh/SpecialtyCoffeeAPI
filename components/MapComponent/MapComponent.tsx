import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "./mapComponent.module.css";

export default function getCoordinates({ lat, long }) {
	const LeafIcon = Icon.extend({
		options: {
			iconSize: [40, 40],
		},
	});
	const customIcon = new LeafIcon({ iconUrl: "/assets/pin.png" });
	console.log(lat, long);
	return (
		<div>
			<MapContainer
				center={[lat, long]}
				zoom={15}
				scrollWheelZoom={false}
				className={styles.container}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker icon={customIcon} position={[lat, long]}>
					<Popup>` Using Leaflet to show this map ✨`</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
