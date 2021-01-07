const express = require("express");
const bodyParser = require("body-parser");
require("./databaseConnection");
const Databaseproducts = require("./productModel");
const multer = require("multer");
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Uploads = multer({ storage: Storage });

const app = express();

app.use(express.json());
app.use(bodyParser());

// routes of products
app.post("/", Uploads.single("image"), async (req, res) => {
  let NewProduct = new Databaseproducts({
    name: req.body.name,
    price: req.body.price,
    image: req.file.originalname,
  });

  let productOne = await NewProduct.save();
  res.json(productOne);
});

app.get("/", async (req, res) => {
  let allProducts = await Databaseproducts.find();
  res.json(allProducts);
});

app.get("/:id", async (req, res) => {
  let findOneProduct = await Databaseproducts.findById(req.params.id);
  res.json(findOneProduct);
});

app.patch("/:id", async (req, res) => {
  let UpdateProduct = await Databaseproducts.findById(req.params.id);
  UpdateProduct.name = req.body.name;
  await UpdateProduct.save();
  res.send("product updated");
});

app.delete("/:id", async (req, res) => {
  const deleteProduct = await Databaseproducts.findById(req.params.id);
  await deleteProduct.remove();
  res.send("product deleted");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`);
});
