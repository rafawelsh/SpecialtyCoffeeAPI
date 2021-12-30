import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import LikesCounter from "../../components/LikesCounter/LikesCounter";
import styles from "./coffeeshop.module.css";
import { CoffeeShopsType } from "../../types";
import { FaMapMarkerAlt } from "react-icons/fa";

const coffeeShop = {
	id: "",
	name: "",
	roaster: false,
	city: "",
	state: "",
	counter: {
		likes: 0,
		dislikes: 0,
	},
};

export default function CoffeeShopId() {
	const [data, setData] = useState<CoffeeShopsType>(coffeeShop);
	const { query } = useRouter();

	useEffect(() => {
		axios({
			method: "GET",
			url: `http://localhost:3000/api/coffeeshop/${query.id}`,
		}).then((response) => {
			setData(response.data);
		});
	}, [query]);

	/*function handleClick(e) {
		console.log(e.target.id);
		const valueToIncrease = e.target.id;*/

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

	const { name, roaster, city, state, counter }: CoffeeShopsType = data;

	return (
		<div className={styles.container}>
			<section className={styles.coffeeshopDetails}>
				<LikesCounter {...counter} handleClick={handleClick} />
				<>
					<h1 className={styles.coffeeshopTitle}>{name}</h1>
					<div className={styles.coffeeshopLocation}>
						<FaMapMarkerAlt /> {city} {state}
					</div>
					{roaster}
				</>
			</section>

			<button>
				<Link href='/' as={`/`}>
					<a>Go Back to Main</a>
				</Link>
			</button>
		</div>
	);
}
