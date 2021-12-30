import React from "react";
import styles from "./likesCounter.module.css";
import { CounterType } from "../../types/CoffeeShopsType";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function LikesCounter({
	likes,
	dislikes,
	handleClick,
}: CounterType) {
	return (
		<div className={styles.container}>
			<button
				id='likes'
				className={`${styles.arrowButton} ${styles.buttonStyles}`}
				onClick={handleClick}
			>
				Like
			</button>
			<div className={`${styles.likesIndicator} ${styles.buttonStyle}`}>
				{likes} / {dislikes}
			</div>
			<button
				id='dislikes'
				className={`${styles.arrowButton} ${styles.buttonStyles}`}
				onClick={handleClick}
			>
				Dislikes
			</button>
		</div>
	);
}
