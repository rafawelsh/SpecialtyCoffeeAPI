import React from "react";
import styles from "./likesCounter.module.css";
import { CounterType } from "../../types/CoffeeShopsType";
import handlerCoffeeShop from "../../pages/api/coffeeshop/[id]";

export default function LikesCounter({ likes, dislikes }: CounterType) {
	return (
		<div className={styles.container}>
			<button>Click: {likes}</button>
			<div>0</div>
			<button>Click: {dislikes}</button>
		</div>
	);
}
