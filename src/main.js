import crypto from "crypto";

export default async ({ req, res }) => {
  try {
    const body = JSON.parse(req.body || "{}");
    const phone = body.phone;

    if (!phone) {
      return res.json({ error: "Phone is required" }, 400);
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const token = crypto.randomUUID();

    console.log("Sending OTP", otp, "to", phone);

    return res.json({
      token,
      otp // REMOVE in production
    });

  } catch (error) {
    return res.json({ error: error.message }, 500);
  }
};
