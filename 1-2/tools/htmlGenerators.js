const postHtmlGenerator = (option) => {
  const {
    method,
    action,
    id,
    title,
    price,
    rating,
    stock,
    brand,
    category,
  } = option;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous" />
    <link rel="stylesheet" href="/css/product.css" />
    <title>Product Form</title>
  </head>
  <body>
    <div class="mx-auto my-5 mm container rounded p-4">
      <form method="${method}" action="${action}">
        <div class="form-group">
          <label for="id" class="form-label">ID:</label>
          <input type="text" id="id" name="id" value="${id}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title" class="form-label">Title:</label>
          <input type="text" id="title" name="title" value="${title}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="price" class="form-label">Price:</label>
          <input type="text" id="price" name="price" value="${price}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="rating" class="form-label">Rating:</label>
          <input type="text" id="rating" name="rating" value="${rating}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="stock" class="form-label">Stock:</label>
          <input type="text" id="stock" name="stock" value="${stock}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="brand" class="form-label">Brand:</label>
          <input type="text" id="brand" name="brand" value="${brand}" class="form-control" />
        </div>
        <div class="form-group mb-2">
          <label for="category" class="form-label">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value="${category}"
            class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary mr-2">Create</button>
        <button type="button" class="btn btn-primary" onclick="cancel()">Cancel</button>
      </form>
    </div>
  </body>
  <script src="/js/cancel.js"></script>
  <script
    src="https://code.jquery.com/jquery-3.6.3.min.js"
    integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
    crossorigin="anonymous"></script>
</html>
`;
};

const putHtmlGenerator = (option) => {
  const {
    method,
    action,
    id,
    title,
    price,
    rating,
    stock,
    brand,
    category,
  } = option;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous" />
    <link rel="stylesheet" href="/css/product.css" />
    <title>Product Form</title>
  </head>
  <body>
    <div class="mx-auto my-5 mm container rounded p-4">
      <form method="${method}" action="${action}">
        <div class="form-group">
          <label for="id" class="form-label">ID:</label>
          <input type="text" id="id" name="id" disabled value="${id}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title" class="form-label">Title:</label>
          <input type="text" id="title" name="title" value="${title}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="price" class="form-label">Price:</label>
          <input type="text" id="price" name="price" value="${price}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="rating" class="form-label">Rating:</label>
          <input type="text" id="rating" name="rating" value="${rating}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="stock" class="form-label">Stock:</label>
          <input type="text" id="stock" name="stock" value="${stock}" class="form-control" />
        </div>
        <div class="form-group">
          <label for="brand" class="form-label">Brand:</label>
          <input type="text" id="brand" name="brand" value="${brand}" class="form-control" />
        </div>
        <div class="form-group mb-2">
          <label for="category" class="form-label">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value="${category}"
            class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary mr-2">Update</button>
        <button type="button" class="btn btn-primary mr-2" onclick="deleteProduct()">Delete</button>
        <button type="button" class="btn btn-primary" onclick="cancel()">Cancel</button>
      </form>
    </div>
  </body>
  <script
    src="https://code.jquery.com/jquery-3.6.3.min.js"
    integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
    crossorigin="anonymous"></script>
    <script src="/js/update.js"></script>
    <script src="/js/delete.js"></script>
</html>
`;
};

const messageHtmlGenerator = (option) => {
  const { title, message } = option;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <h1>${message}</h1>
    <button type="button" onclick="cancel()">Redirect</button>
  </body>
  <script src="/js/cancel.js"></script>
</html>
`;
};

module.exports = {
  postHtmlGenerator,
  putHtmlGenerator,
  messageHtmlGenerator,
};
