const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("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");


//Backup code: txhp-krfl-kphq-uyal-czkf
//If you lose your device, this code can be used to disable two-step authentication and access your account.

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "cad",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
