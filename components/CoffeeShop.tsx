import Link from "next/link";

export default function CoffeeShop({ coffeeshop, index }) {
	return (
		<li key={index}>
			<Link href='/coffeeshop/[coffeeshop]' as={`/coffeeshop/${coffeeshop.id}`}>
				<a>{coffeeshop.name}</a>
			</Link>
		</li>
	);
}
