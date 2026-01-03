export default async ({ req, res }) => {
  try {
    // Request body سے فون نمبر نکالیں
    const { phone } = JSON.parse(req.body);
    
    // 6-digit OTP generate
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const token = self.crypto.randomUUID(); // Unique token for verification
    
    // Log for debugging
    console.log(`Sending OTP ${otp} to ${phone}`);
    
    // جواب واپس کریں
    return res.json({
      token: token,
      otp: otp // صرف ٹیسٹ کے لیے — حقیقی ایپ میں یہ نہیں بھیجنا
    });
    
  } catch (error) {
    return res.json({ error: error.message }, 500);
  }
};
