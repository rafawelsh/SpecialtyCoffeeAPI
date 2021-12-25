import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url: RequestInfo) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		console.log("hello");
		throw new Error(data.message);
	}
	console.log(data);
	return data;
};

export default function CoffeeShop() {
	const { query } = useRouter();
	console.log({ query });

	const { data, error } = useSWR(
		() => query.id && `/api/coffeeshop/${query.id}`,
		fetcher
	);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<>
			<p>Hello</p>
			{data.name}
		</>
	);
}
