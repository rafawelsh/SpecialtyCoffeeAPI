// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {coffeeShops} from '../../../data'

type CoffeeShopType = {
    id: string,
		name: string,
		roaster: boolean,
		city: string,
		state: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeShopType[]>,
) {
  res.status(200).json(coffeeShops)
}
