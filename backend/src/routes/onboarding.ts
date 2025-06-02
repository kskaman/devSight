import express from 'express';
import { onboardingHandler } from "../controllers/OnboardingController.js";

const router = express.Router();

router.get('/', onboardingHandler);

export default router;
