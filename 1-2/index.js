const express = require("express");
const path = require("path");
const Joi = require("joi");
const notFoundHandler = require("./middlewares/notFoundHandler");
const productRouter = require("./routers/product");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product", productRouter);
app.use(express.static("public"));

app.get("/products-page", (_req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use(notFoundHandler);

//FIXME: port is hard coded bc of url redirecting
const port = 1010;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
