const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const appointmentRoute = require("./routes/appointment");
const contactRoute = require("./routes/contact");
const dataRoute = require("./routes/dataCollection");
const newsletterRoute= require('./routes/newsletter')
const cors = require("cors");

dotenv.config();

mongoose
  .connect("mongodb+srv://hermesaero007:hermes2023@hermesaerospace.8nely0n.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/data", dataRoute);
app.use("/api/newsletter", newsletterRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
