import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

import LikesCounter from "../../components/LikesCounter/LikesCounter";
import styles from "./coffeeshop.module.css";
import { CoffeeShopsType } from "../../types";

const fetcher = async (url: RequestInfo) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}

	return data;
};

export default function CoffeeShop() {
	const { query } = useRouter();

	const { data, error } = useSWR(
		() => query.id && `/api/coffeeshop/${query.id}`,
		fetcher
	);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Loading...</div>;
	const { id, name, roaster, city, state, counter }: CoffeeShopsType = data;

	return (
		<div className={styles.container}>
			<section className={styles.coffeeshopDetails}>
				<LikesCounter {...counter} />
				<h1 className={styles.coffeeshopTitle}>{name}</h1>
				<div className={styles.coffeeshopLocation}>
					{city}, {state}
				</div>
				{roaster}
			</section>

			<button>
				<Link href='/' as={`/`}>
					<a>Go Back to Main</a>
				</Link>
			</button>
		</div>
	);
}
