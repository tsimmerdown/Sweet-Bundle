const express = require("express");

const createCheckout = require("../controllers/createCheckout.js");

const router = express.Router();

router.post("/create-checkout-session", createCheckout);

export default router;
