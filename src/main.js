import crypto from "crypto";

export default async (context) => {
  const { req, res } = context;

  try {
    const raw = req.body;

    if (!raw) {
      return res.json({ error: "Empty body" }, 400);
    }

    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    const phone = data.phone;

    if (!phone) {
      return res.json({ error: "Phone missing" }, 400);
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const token = crypto.randomUUID();

    console.log("OTP:", otp, "Phone:", phone);

    return res.json({
      token: token,
      otp: otp
    });

  } catch (e) {
    return res.json({ error: e.message }, 500);
  }
};
