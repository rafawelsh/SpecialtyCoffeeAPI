import type { NextApiRequest, NextApiResponse } from "next";
import type { CoffeeShopsType } from "../../../types";

import { db } from "../../../utils/db";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CoffeeShopsType[]>
) {
	const { method } = req;
	const coffeeShopsRef = collection(db, "coffeeshops");

	if (method === "POST") {
		const { name, roaster, city, state } = req.body;
		try {
			await addDoc(coffeeShopsRef, {
				name: name,
				roaster: roaster,
				city: city,
				state: state,
				counter: { likes: 0, dislikes: 0 },
			});
			res.status(200).json(req.body);
		} catch (error) {
			res.status(400).end();
		}
	}
}
