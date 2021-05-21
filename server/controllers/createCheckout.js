const stripe = require("stripe");

export const createCheckout = async (req, res) => {
  const { cart } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "ideal"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json({ id: session.id });
};
