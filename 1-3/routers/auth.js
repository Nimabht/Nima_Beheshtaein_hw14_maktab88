const express = require("express");
const path = require("path");
const _ = require("lodash");
const Jud = require("json-update-data");
const Joi = require("joi");
const users = require("../db/users-data.json");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signup.html"));
});
router.post("/signup", (req, res) => {
  const { error } = validateUser(req.body);
  console.log(error);
  if (!!error) {
    console.log(error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }
  const isDuplicateId = _.some(users, [
    "username",
    req.body.username,
  ]);
  if (!!isDuplicateId) {
    return res.status(400).send("User with given id already exists");
  }
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    username: req.body.username,
    genre: req.body.genre,
  };
  users.push(newUser);
  try {
    Jud.pushData(
      path.join(__dirname, "../db/users-data.json"),
      newUser
    );
    res.status(201).send("User Created.");
  } catch (err) {
    console.log(err.message);

    return res.status(500).send("something is wrong!");
  }
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/login/authenticate", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) return res.status(401).send("Invalid inputs!");
  res.json({ user });
});

function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().min(4).required().messages({
      "string.min": "First name must be at least 4 characters long",
      "any.required": "First name is required",
    }),
    lastname: Joi.string().min(4).required().messages({
      "string.min": "Last name must be at least 4 characters long",
      "any.required": "Last name is required",
    }),
    //FIXME: doesn't validate password
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{8,30}$/)
      .messages({
        "string.pattern.base":
          "Password is invalid (8 to 30 characters, containt : upper and lower characters and number) ",
      }),
    username: Joi.string()
      .alphanum()
      .min(4)
      .max(30)
      .required()
      .messages({
        "string.base": "Username must be a string",
        "string.alphanum":
          "Username must only contain alpha-numeric characters",
        "string.min": "Username must be at least 4 characters long",
        "string.max": "Username cannot be longer than 30 characters",
        "any.required": "Username is required",
      }),
    genre: Joi.string().required().messages({
      "any.required": "genre is required",
    }),
  });
  return schema.validate(user);
}
module.exports = router;
