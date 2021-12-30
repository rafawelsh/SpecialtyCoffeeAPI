import React from "react";
import styles from "./likesCounter.module.css";
import { CounterType } from "../../types/CoffeeShopsType";

export default function LikesCounter({
	likes,
	dislikes,
	handleClick,
}: CounterType) {
	return (
		<div className={styles.container}>
			<button id='likes' onClick={handleClick}>
				Click: {likes}
			</button>
			<div>0</div>
			<button id='dislikes' onClick={handleClick}>
				Click: {dislikes}
			</button>
		</div>
	);
}
