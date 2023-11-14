const Order = require("../models/Order");
const axios = require('axios');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newOrder = new Order({
    orderNo: orderNo,
    username: req.body.username,
    products: req.body.products,
    amount: req.body.amount,
    address: req.body.address,
    paymentStatus: req.body.paymentStatus,
    payment: req.body.payment,
    receipt: req.body.receipt
  });

  try {
    const savedOrder = await newOrder.save();

    // Update stock for each ordered product
    for (const orderedProduct of req.body.products) {
      const productId = orderedProduct.productId;
      const quantity = orderedProduct.quantity;

      const { data: productToUpdate } = await axios.get(`http://localhost:5000/api/products/find/${productId}`);
      
      if (!productToUpdate) {
        return res.status(404).json({ message: "Product not found" });
      }
      productToUpdate.stock -= quantity;

      await axios.put(`http://localhost:5000/api/products/updateStock/${productId}`, { stock: productToUpdate.stock });

      console.log(`Stock updated for product ${productId}`);
    }

    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});




//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:username", async (req, res) => {
  try {
    const orders = await Order.find({ username: req.params.username });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET A SPECIFIC ORDER
router.get("/order/:orderNo", async (req, res) => {
  try {
    const orders = await Order.find({ orderNo: req.params.orderNo });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/find/:username", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.username });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


// //GET ALL

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
router.get("/income", async (req, res) => {
  const date = new Date();
  const currentMonthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const previousMonthStart = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth() - 1, 1);
  const currentMonthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const previousMonthEnd = new Date(previousMonthStart.getFullYear(), previousMonthStart.getMonth() + 1, 0);

  try {
    const currentMonthIncome = await Order.aggregate([
      { $match: { createdAt: { $gte: currentMonthStart, $lte: currentMonthEnd } } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const previousMonthIncome = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonthStart, $lte: previousMonthEnd } } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const currentIncome = currentMonthIncome.length ? currentMonthIncome[0].total : 0;
    const previousIncome = previousMonthIncome.length ? previousMonthIncome[0].total : 0;
    const comparison = previousIncome !== 0 ? ((currentIncome - previousIncome) / previousIncome) * 100 : 0;

    res.status(200).json({
      thisMonth: currentIncome,
      comparison: comparison,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




//GET DAILY INCOME

router.get("/dailyIncome", async (req, res) => {
  const date = new Date();
  const startOfToday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const endOfToday = new Date(startOfToday.getTime() + 24 * 60 * 60 * 1000 - 1);
  const startOfYesterday = new Date(startOfToday.getTime() - 24 * 60 * 60 * 1000);
  const endOfYesterday = new Date(startOfYesterday.getTime() + 24 * 60 * 60 * 1000 - 1);

  try {
    const todayIncome = await Order.aggregate([
      { $match: { createdAt: { $gte: startOfToday, $lte: endOfToday } } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0,
          total: 1,
        },
      },
    ]);

    const yesterdayIncome = await Order.aggregate([
      { $match: { createdAt: { $gte: startOfYesterday, $lte: endOfYesterday } } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0,
          total: 1,
        },
      },
    ]);

    const comparison =  ((todayIncome[0].total - yesterdayIncome[0].total) / yesterdayIncome[0].total) * 100;

    res.status(200).json({
      today: todayIncome[0].total,
      comparison: comparison,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});



const orderNo = generateToken();

// Generate a unique order number for each order
function generateToken () {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars[randomIndex];
  }
  return token;
}



//Get Stats




router.get("/hourly-income-stats", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d %H",
              date: "$createdAt",
            },
          },
          total: { $sum: "$amount" },
          orders: { $count: {} }, // count the number of orders
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get("/daily-income-stats", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt",
            },
          },
          total: { $sum: "$amount" },
          orders: { $count: {} }, // count the number of orders
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get("/weekly-income-stats", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%U",
              date: "$createdAt",
            },
          },
          total: { $sum: "$amount" },
          orders: { $count: {} }, // count the number of orders
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get("/monthly-income-stats", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m",
              date: "$createdAt",
            },
          },
          total: { $sum: "$amount" },
          orders: { $count: {} }, // count the number of orders
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/yearly-income-stats", async (req, res) => {
  const currentDate = new Date();
  const fiveYearsAgo = new Date(currentDate.getFullYear() - 5, 0, 1);
  
  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: fiveYearsAgo,
            $lte: currentDate,
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y",
              date: "$createdAt",
            },
          },
          total: { $sum: "$amount" },
          orders: { $count: {} }, // count the number of orders
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/latest", async (req, res) => {
  try {
    const latestOrders = await Order.find().sort({createdAt: -1}).limit(10);
    res.json(latestOrders);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});






module.exports = router;
