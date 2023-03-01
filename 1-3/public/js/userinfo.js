const deleteUser = (username) => {
  console.log(`admin/remove-user/${username}`);
  $.ajax({
    type: "DELETE",
    url: `http://localhost:1010/admin/remove-user/${username}`,
    success(_data) {
      window.location.href = "http://localhost:1010/admin/panel";
    },
    error(err) {
      console.log(err);
    },
  });
};
