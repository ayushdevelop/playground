import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_CONNECTION || 'redis://localhost:6379');

function otpKey(phone) {
    return `otp:${phone}`;
}

app.post("/otp", async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    await redis.set(otpKey(phone), otp, "EX", 30);
    res.json({ message: "Otp sent successfully", otp })
});

app.post("/otp/verify", async (req, res) => {
    const { phone, otp } = req.body;
    const savedOtp = await redis.get(otpKey(phone));

    if (!savedOtp) res.json({ message: "OTP expired or not found" });
    if (savedOtp !== otp) res.json({ message: "Invalid OTP" });

    await redis.del(otpKey(phone));
    res.json({ message: "OTP verified successfully" })
})

app.get("/otp/:phone/ttl", async (req, res) => {
    const { phone } = req.params;
    const ttl = await redis.ttl(otpKey(phone));
    res.json({ ttl });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})