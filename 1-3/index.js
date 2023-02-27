const express = require("express");
const path = require("path");
const Joi = require("joi");
const notFoundHandler = require("./middlewares/notFoundHandler");
const authRouter = require("./routers/auth");
const app = express();

app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use(express.static("public"));
app.use(notFoundHandler);

//FIXME: port is hard coded bc of url redirecting
const port = 1010;
app.listen(port, () => {
  console.log(`App is listening on ${port}...`);
});
