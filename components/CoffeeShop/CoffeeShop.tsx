import Link from "next/link";

import RoasterBadge from "../RoasterBadge/RoasterBadge";
import { CoffeeShopsType } from "../../types";

import styles from "./coffeeshopComponent.module.css";

export default function CoffeeShop(
	{ id, name, roaster, city, state }: CoffeeShopsType,
	index: number
) {
	return (
		<Link href='/coffeeshop/[coffeeshop]' as={`/coffeeshop/${id}`}>
			<a>
				<li key={index} className={styles.container}>
					<h1>{name}</h1>
					{roaster && <RoasterBadge />}
					<h2>
						{city}, {state}
					</h2>
				</li>
			</a>
		</Link>
	);
}
