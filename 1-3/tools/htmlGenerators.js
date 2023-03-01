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

const userHtmlGenerator = (option) => {
  const { firstname, lastname, username, password, gender } = option;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous" />
      <link rel="stylesheet" href="/css/info.css">
    <title>${username} info</title>
  </head>
  <body
    class="d-flex vh-100 justify-content-center align-items-center">
    <div class="card col-4">
      <img
        src="https://unsplash.com/photos/Pk0xvWMbuok/download?ixid=MnwxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE2Nzc2NTUyMTU&force=true&w=640"
        alt="mountain" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title align-self-center">${firstname} ${lastname}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Username: ${username}</li>
          <li class="list-group-item">Passowrd: ${password}</li>
          <li class="list-group-item">Gender: ${gender}</li>
        </ul>
      </div>
      <div class="card-body text-center">
        <button class="btn btn-warning" onclick="deleteUser('${username}')">Delete Me :(</button>
      </div>
    </div>
     <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"></script>
    <script src="/js/userinfo.js"></script>
  </body>
</html>
`;
};

module.exports = {
  messageHtmlGenerator,
  userHtmlGenerator,
};
