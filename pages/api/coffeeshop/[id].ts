import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../utils/db";
import { updateDoc, getDoc, doc } from "firebase/firestore";

export default async function handlerCoffeeShop(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { id } = req.query;

	const coffeeShopsRef = doc(db, "coffeeshops", String(id));
	const coffeeShopData = await getDoc(coffeeShopsRef);

	if (method === "GET") {
		try {
			res.status(200).json(coffeeShopData.data());
		} catch (error) {
			res.status(400).send("something went wrong");
		}
	}
	if (method === "POST") {
		await updateDoc(coffeeShopsRef, {
			counter: {
				likes: 100,
				dislikes: 5,
			},
		});
		res.status(200).send("posting on signle");
	}
}
