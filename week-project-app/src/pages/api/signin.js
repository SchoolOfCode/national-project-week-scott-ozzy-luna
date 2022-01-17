import cookie from "cookie";

export default function handler(req, res) {
   const token = req.body.token;
   res.setHeader(
      "set-cookie",
      cookie.serialize("token", token, {
         httpOnly: true,
         maxAge: 60 * 60 * 3,
         sameSite: true,
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
}
