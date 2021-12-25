import type { NextApiRequest, NextApiResponse } from "next";
import { coffeeShops } from "../../../data";

export default function coffeeShopHandler({query: {id}}: NextApiRequest, res:NextApiResponse) {

	const filtered = coffeeShops.filter((p) => p.id === id);
  if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `User with id: ${id} not found.` });
	}
}