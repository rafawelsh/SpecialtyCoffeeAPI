import React from "react";
import styles from "./likesCounter.module.css";

export default function LikesCounter() {
	return (
		<div className={styles.container}>
			<div>likes</div>
			<div>0</div>
			<div>dislikes</div>
		</div>
	);
}
