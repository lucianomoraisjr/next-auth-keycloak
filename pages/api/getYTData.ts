import { getToken } from "next-auth/jwt"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const secret = process.env.SECRET;
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req,secret })
  res.send(JSON.stringify(token, null, 2))
}



