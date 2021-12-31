import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";

import LikesCounter from "../../components/LikesCounter/LikesCounter";
import CoffeeShopAdditional from "../../components/CoffeeShopAdditional/CoffeeShopAdditional";
import Map from "../../components/MapComponent/index";
import { CoffeeShopsType } from "../../types";

import styles from "./coffeeshop.module.css";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const coffeeShop = {
	id: "",
	name: "",
	roaster: false,
	address: "",
	city: "",
	state: "",
	website: "",
	counter: {
		likes: 0,
		dislikes: 0,
	},
	coordinates: {
		lat: "",
		long: "",
	},
	socials: {
		instagram: "",
		facebook: "",
	},
};

export default function CoffeeShopId() {
	const [data, setData] = useState<CoffeeShopsType>(coffeeShop);
	const [isBrowser, setIsBrowser] = useState(false);

	const { query } = useRouter();

	useEffect(() => {
		axios({
			method: "GET",
			url: `http://localhost:3000/api/coffeeshop/${query.id}`,
		}).then((response) => {
			setData(response.data);
		});
	}, [query]);

	function handleClick(e: React.MouseEvent<HTMLElement>) {
		const valueToIncrease = (e.target as HTMLInputElement).id;
		axios
			.post(`http://localhost:3000/api/coffeeshop/${query.id}`, {
				valueToIncrease,
				counter,
			})
			.then((res) => {
				setData(res.data);
			});
	}

	// correctly fetching coordinates
	// function sendGeocodingRequest(location) {
	// 	return fetch(
	// 		`https://api.traveltimeapp.com/v4/geocoding/search?query=` + location,
	// 		{
	// 			method: "GET",
	// 			credentials: "same-origin",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				"X-Application-Id": "6c7d8430",
	// 				"X-Api-Key": "b18b40b7d621a01cf23bf4200647c79e",
	// 				"Accept-Language": "en-US",
	// 			},
	// 		}
	// 	).then((response) => response.json()); // parses JSON response into native Javascript objects
	// }
	// const location = "4523 NE Fremont Street, Portland, OR 97213";

	// sendGeocodingRequest(location)
	// 	.then
	// 	// (data) => console.log(data.features[0].geometry.coordinates)
	// 	// Do need FULL address like this: "4523 NE Fremont Street, Portland, OR 97213"
	// 	// SHAPE OF DATA [long: -122.6373167, lat: 45.4858576
	// 	();

	const {
		name,
		roaster,
		city,
		state,
		counter,
		website,
		address,
		socials,
		coordinates,
	}: CoffeeShopsType = data;

	// console.log(socials);
	// console.log(coordinates);
	if (!data) {
		return <p>Loading ...</p>;
	}
	return (
		<div className={styles.container}>
			<section className={styles.coffeeshopDetails}>
				<LikesCounter {...counter} handleClick={handleClick} />
				<>
					<h1 className={styles.coffeeshopTitle}>{name}</h1>
					{/* <div className={styles.coffeeshopLocation}>
						<FaMapMarkerAlt /> {city} {state}
					</div> */}
				</>
				<CoffeeShopAdditional {...data} />
				<Map {...coordinates} />
			</section>

			<button>
				<Link href='/' as={`/`}>
					<a>Go Back to Main</a>
				</Link>
			</button>
		</div>
	);
}
