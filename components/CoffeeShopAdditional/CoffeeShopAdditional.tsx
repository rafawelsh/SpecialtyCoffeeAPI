import React from "react";
import { CoffeeShopsType, SocialMediaType } from "../../types";
import styles from "./coffeeShopAdditional.module.css";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

import { GiCoffeeBeans } from "react-icons/gi";
export default function CoffeeShopAdditional({
	city,
	state,
	roaster,
	website,
	address,
	socials,
}: CoffeeShopsType) {
	const { instagram, facebook } = socials || {};

	const Roasters = () => {
		if (roaster) {
			return (
				<p>
					<GiCoffeeBeans /> Roasts Beans
				</p>
			);
		} else {
			return <p>Not Roaster</p>;
		}
	};
	return (
		<div className={styles.container}>
			<div>
				<FaMapMarkerAlt /> {city} {state}
			</div>
			<Roasters />
			<p>{website}</p>
			<p>{address}</p>
			{instagram}
		</div>
	);
}
