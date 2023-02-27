const { messageHtmlGenerator } = require("../tools/htmlGenerators");
function notFoundHandler(req, res, next) {
  const html = messageHtmlGenerator({
    title: "Page Not Found",
    message: "The page you are looking for could not be found :(",
  });
  res.status(404).send(html);
}

module.exports = notFoundHandler;
