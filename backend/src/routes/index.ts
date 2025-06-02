import express from "express";
import onboardingRoute from "./onboarding.js";


const router = express.Router();

router.use("/onboarding", onboardingRoute);

export default router;
