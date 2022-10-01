// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';

const jwt = require("jsonwebtoken");


type Data = {
  success?: string;
  message?: string;
  accessToken?: string
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(res);
  // Authenticate user
  const { email, password } = req.body;
  if (email !== process.env.USER_EMAIL || password !== process.env.USER_PASSWORD) return res.status(403).json({ 'message': 'Please provide correct email and password'})
  
  const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60s",
  });
  const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d'})
  const currentUser = { email, password, refreshToken }
  res.setHeader('Set-Cookie', cookie.serialize("token", accessToken, { httpOnly: true, secure: process.env.NODE_ENV !== 'development', maxAge: 60, sameSite: "strict", path: '/'}))
  res.redirect(302, '/dashboard');
}

/* 

*/