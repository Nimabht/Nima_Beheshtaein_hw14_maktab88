const express = require("express");
const router = express.Router();
const fs = require("fs");
const Jud = require("json-update-data");
const Joi = require("joi");
const path = require("path");
const products = require("../db/products-data.json");

//read all products
router.get("/get-all-products", (_req, res) => {
  return res.json(products);
});

//read a product by id
router.get("/get-product/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id == productId);

  if (!product)
    return res.status(404).render("sendMessage", {
      title: "Product Not Found",
      message: "The Product you are looking for could not be found :(",
    });

  res.json(product);
});

//Create a new product
router.post("/create-product", (req, res) => {
  const { error } = validateProduct(req.body, "POST");
  if (!!error)
    return res
      .status(400)
      .render("sendMessage", { title: "Failure", message: error.details[0].message });

  const newProduct = {
    id: +req.body.id,
    title: req.body.title,
    price: +req.body.price,
    rating: +req.body.rating,
    stock: +req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
  };
  products.push(newProduct);
  try {
    Jud.pushData(path.join(__dirname, "../db/products-data.json"), newProduct);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .render("sendMessage", { title: "Oh Oh", message: "Something is wrong!!!" });
  }
  res.redirect("/products-page");
});

//Update a product
router.put("/update-product/:id", (req, res) => {
  const { error } = validateProduct(req.body, "PUT");
  if (!!error)
    return res
      .status(400)
      .render("sendMessage", { title: "Failure", message: error.details[0].message });

  const productId = req.params.id;
  const product = products.find((product) => product.id == productId);
  if (!product)
    return res.status(404).render("sendMessage", {
      title: "Product Not Found",
      message: "The Product you are looking for could not be found :(",
    });

  const { title, price, rating, stock, brand, category } = req.body;
  if (title) product.title = title;
  if (price) product.price = price;
  if (rating) product.rating = rating;
  if (stock) product.stock = stock;
  if (brand) product.brand = brand;
  if (category) product.category = category;
  try {
    Jud.writeData(path.join(__dirname, "../db/products-data.json"), products);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .render("sendMessage", { title: "Oh Oh", message: "Something is wrong!!!" });
  }

  res.json(product);
});

//Remove a product
router.delete("/remove-product/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id == productId);
  if (!product)
    return res.status(404).render("sendMessage", {
      title: "Product Not Found",
      message: "The Product you are looking for could not be found :(",
    });
  try {
    Jud.deleteData(path.join(__dirname, "../db/products-data.json"), "id", +productId);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .render("sendMessage", { title: "Oh Oh", message: "Something is wrong!!!" });
  }
  res.json(product);
});

function validateProduct(product, method) {
  const schema =
    method === "POST"
      ? Joi.object({
          id: Joi.required(),
          title: Joi.string().min(3).required(),
          price: Joi.number(),
          rating: Joi.number(),
          stock: Joi.number(),
          brand: Joi.string().min(3).required(),
          category: Joi.string().min(3).required(),
        })
      : Joi.object({
          title: Joi.string().min(3).required(),
          price: Joi.number(),
          rating: Joi.number(),
          stock: Joi.number(),
          brand: Joi.string().min(3).required(),
          category: Joi.string().min(3).required(),
        });
  return schema.validate(product);
}
/*










*/

router.get("/new", (_req, res) => {
  res.render("productPug", {
    method: "POST",
    action: "/product/create-product",
    id: "",
    title: "",
    price: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  });
});

router.get("/:id/edit", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id == productId);
  res.render("productPug", {
    method: "PUT",
    action: `/product/update-product/${productId}`,
    id: product.id,
    title: product.title,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
  });
});

module.exports = router;
