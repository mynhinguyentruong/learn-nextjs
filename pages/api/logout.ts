import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("log out ran");
    await res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );

    return res.redirect(307, "/login");
  } catch (err) {
    console.log(err);
  }
};
