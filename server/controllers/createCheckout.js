const stripe = require("stripe")(
  "sk_test_51IsX2dFEzvTEaCftCzcE5XT1P6SBWI081drcza4WrmHhgzKr813pa9tHaJCIOc0Wqq9SbMQPMFcmYdRksVQt9L1l00nOaMBsFZ"
);

const createCheckout = async (req, res) => {
  const cart = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart,
    mode: "payment",
    success_url: "http://localhost:8000",
    cancel_url: "http://localhost:8000",
  });

  res.json({ id: session.id });
};

module.exports = createCheckout;
