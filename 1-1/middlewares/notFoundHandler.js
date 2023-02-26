function notFoundHandler(req, res, next) {
  res.status(404);
  res.render("index", {
    title: "Page Not Found",
    message: "The page you are looking for could not be found :(",
  });
}

module.exports = notFoundHandler;
