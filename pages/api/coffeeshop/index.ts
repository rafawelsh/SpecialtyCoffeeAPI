// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {coffeeShops} from '../../../data'
import type {CoffeeShopsType} from '../../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeShopsType[]>,
) {
  const {method} = req;
  
  switch (method) {
    case 'GET':
      res.status(200).json(coffeeShops)
      break;
    case 'POST':
      const {body} = req;
      coffeeShops.push({...body, id: coffeeShops.length + 1})
      res.status(200).json(coffeeShops)
      break
    default:
      console.log(`Sorry, we cannot do that request`)
    }
}
