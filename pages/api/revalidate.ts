import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }
  console.log("revalidate path ran");
  try {
    await res.revalidate("/dashboard");
    return res.json({ revalidated: true });
  } catch (err) {
    res.redirect("/login");
  }
}
