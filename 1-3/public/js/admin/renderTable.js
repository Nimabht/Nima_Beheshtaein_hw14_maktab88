//table render function
function renderTable() {
  $.ajax({
    type: "GET",
    url: "/admin/get-all-users",
    success(data) {
      let users = data;
      //reset table
      table.innerHTML = `<tr class="thead-dark">
          <th id="username" scope="col">Username</th>
          <th id="firstname" scope="col">First name</th>
          <th id="lastname" scope="col">Last name</th>
          <th id="gender" scope="col">Gender</th>
        </tr>`;
      //create rows
      users = users.map((user) => {
        const { username, firstname, lastname, gender } = user;
        return { username, firstname, lastname, gender };
      });
      users.forEach((user) => {
        table.insertRow();
        for (const key in user) {
          let newCell =
            table.rows[table.rows.length - 1].insertCell();
          newCell.textContent = user[key];
        }
      });
      //assign onclick function for each row (row 2 -...) for rendering modal
      for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
          getUserData(this);
        };
      }
      //assign/update selected user and openUp modal for it
      function getUserData(userRow) {
        const username = userRow.children[0].innerText;
        window.location.href = `http://localhost:1010/admin/${username}/info`;
      }
    },
    error(err) {
      console.log(err);
    },
  });
}
