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
  console.log(req.body);
  const { error } = validateUser(req.body);
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

function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().min(4).required(),
    lastname: Joi.string().min(4).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),
    username: Joi.string().alphanum().min(4).max(30).required(),
    genre: Joi.string().required(),
  });
  return schema.validate(user);
}
module.exports = router;
