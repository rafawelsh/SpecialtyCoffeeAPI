import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../utils/db";
import { updateDoc, getDoc, doc, increment } from "firebase/firestore";

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
		const value = req.body.valueToIncrease;

		await updateDoc(coffeeShopsRef, {
			[`counter.${value}`]: increment(1),
		});
		const coffeeShopData = await getDoc(coffeeShopsRef);

		res.status(200).send(coffeeShopData.data());
	}
}
