const express = require("express");
const path = require("path");
const Jud = require("json-update-data");
const users = require("../db/users-data.json");
const { userHtmlGenerator } = require("../tools/htmlGenerators");
const router = express.Router();

router.get("/panel", (_req, res) => {
  res.sendFile(path.join(__dirname, "../views/panel.html"));
});

router.get("/get-all-users", (_req, res) => {
  res.json(users);
});

router.get("/get-user/:username", (req, res) => {
  const username = req.params.username;
  user = users.find((user) => {
    user.username === username;
  });
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

router.delete("/remove-user/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((user) => user.username == username);
  if (!user) return res.status(404).send("User not found");
  try {
    Jud.deleteData(
      path.join(__dirname, "../db/users-data.json"),
      "username",
      username
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Something is wrong!!!");
  }
  res.json(user);
});

router.get("/:username/info", (req, res) => {
  const username = req.params.username;
  const user = users.find((user) => user.username == username);
  console.log(user);
  const html = userHtmlGenerator({
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    password: user.password,
    gender: user.gender,
  });
  res.send(html);
});

module.exports = router;
