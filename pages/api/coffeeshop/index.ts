// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { CoffeeShopsType } from "../../../types";

import { db } from "../../../utils/db";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CoffeeShopsType[] | string>
) {
	const { method } = req;
	const coffeeShopsRef = collection(db, "coffeeshops");

	if (method === "GET") {
		try {
			const data = await getDocs(coffeeShopsRef);
			const parsedData = data.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			res.status(200).json(parsedData);
		} catch (e) {
			res.status(400).end();
			console.log(e);
		}
	}
	if (method === "POST") {
		res.status(403).send("Cannot do that");
	}
}
