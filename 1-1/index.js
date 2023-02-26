const express = require("express");
const Joi = require("joi");
const notFoundHandler = require("./middlewares/notFoundHandler");
const productRouter = require("./routers/product");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use("/product", productRouter);

app.use(notFoundHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
