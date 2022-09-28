// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const jwt = require("jsonwebtoken");

type Data = {
  success: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req);
  // Authenticate user
  const { email, password } = req.body;
  const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60s",
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ success: `Successfully login with ${email}` });
}
