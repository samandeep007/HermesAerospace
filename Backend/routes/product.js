const router = require("express").Router();
const multer = require("multer");
const PDFDocument = require("pdfkit");
const axios = require("axios");
const admin = require("firebase-admin");
const serviceAccount = require("../hermesaerospace-d4883-firebase-adminsdk-s6toz-fb980120f2.json");
const { Product, Review } = require("../models/product");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "hermesaerospace-d4883.appspot.com",
});

const storage = multer.memoryStorage();
const upload = multer({ storage }).fields([
  { name: "image", maxCount: 1 },
  { name: "images[]", maxCount: 4 },
]);

// CREATE
router.post("/", upload, async (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    const images = [];

    if (req.files["image"]) {
      const file = bucket.file(req.files["image"][0].originalname);
      const options = {
        resumable: false,
        metadata: {
          contentType: req.files["image"][0].mimetype,
        },
      };
      await file.save(req.files["image"][0].buffer, options);
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(file.name)}?alt=media`;
      images.push(imageUrl);
    }

    if (req.files["images[]"]) {
      for (let i = 0; i < req.files["images[]"].length; i++) {
        const file = bucket.file(req.files["images[]"][i].originalname);
        const options = {
          resumable: false,
          metadata: {
            contentType: req.files["images[]"][i].mimetype,
          },
        };
        await file.save(req.files["images[]"][i].buffer, options);
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(file.name)}?alt=media`;
        images.push(imageUrl);
      }
    }

    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      images: images,
      category: req.body.category,
      rating: 0,
      reviews: [],
      regularPrice: req.body.regularPrice,
      price: req.body.price,
      stock: req.body.stock,
     
    });

    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// CREATE REVIEW
router.post("/:productId/reviews", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const newReview = new Review({
      title: req.body.title,
      description: req.body.description,
      user: {
        name: req.body.name,
        email: req.body.email,
      },
      rating: req.body.rating,
      product: product._id,
    });

    const savedReview = await newReview.save();
    product.reviews.push(savedReview);
    await product.calculateAvgRating();
    await product.save();

    res.status(200).json(savedReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create review" });
  }
});

// GET all reviews for a particular product
router.get("/:productId/reviews", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
      "reviews"
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product.reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get reviews" });
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", upload, async (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    const images = [];

    if (req.files["image"]) {
      const file = bucket.file(req.files["image"][0].originalname);
      const options = {
        resumable: false,
        metadata: {
          contentType: req.files["image"][0].mimetype,
        },
      };
      await file.save(req.files["image"][0].buffer, options);
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(file.name)}?alt=media`;
      images.push(imageUrl);
    }

    if (req.files["images[]"]) {
      for (let i = 0; i < req.files["images[]"].length; i++) {
        const file = bucket.file(req.files["images[]"][i].originalname);
        const options = {
          resumable: false,
          metadata: {
            contentType: req.files["images[]"][i].mimetype,
          },
        };
        await file.save(req.files["images[]"][i].buffer, options);
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(file.name)}?alt=media`;
        images.push(imageUrl);
      }
    }

    const product = await Product.findById(req.params.id);

    if (req.files["image"] || req.files["images[]"]) {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          description: req.body.description,
          images: product.images.concat(images),
          category: req.body.category,
          rating: req.body.rating,
          reviews: req.body.reviews,
          regularPrice: req.body.regularPrice,
          price: req.body.price,
          stock: req.body.stock,
          availability: req.body.availability,
        },
        { new: true }
      );

      res.status(200).json(updatedProduct);
    } else {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          rating: req.body.rating,
          reviews: req.body.reviews,
          regularPrice: req.body.regularPrice,
          price: req.body.price,
          stock: req.body.stock,
          availability: req.body.availability,
        },
        { new: true }
      );

      res.status(200).json(updatedProduct);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE PRODUCT IMAGE
router.delete("/:id/images/:imageId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const imageIndex = product.images.findIndex((image) =>
      image.includes(req.params.imageId)
    );
    if (imageIndex === -1) {
      return res.status(404).json({ error: "Image not found" });
    }

    const imageUrl = product.images[imageIndex];
    const bucket = admin.storage().bucket();
    const file = bucket.file(
      decodeURIComponent(imageUrl.split("/o/")[1].split("?alt=media")[0])
    );
    await file.delete();

    // Remove the image URL from the images array in your database
    product.images.splice(imageIndex, 1);
    await product.save();

    res.status(200).json("Product image has been deleted...");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete product image" });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});



//UPDATE STOCK
router.put('/updateStock/:id', async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: { stock } },
      { new: true }
    );
  
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    if (stock === 0) {
      updatedProduct.availability = false;
      await updatedProduct.save();
    }
  
    res.status(200).json({ message: 'Stock updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
  
});



module.exports = router;
