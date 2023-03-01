let polipop = new Polipop("signupSection", {
  layout: "popups",
  insert: "before",
  pool: 5,
  sticky: true,
  life: 3000,
  progressbar: true,
});

$("form").on("submit", function (e) {
  e.preventDefault();
  const user = {
    username: $(".noBullet").children()[0].children[1].value,
    password: $(".noBullet").children()[1].children[1].value,
  };
  $.ajax({
    type: "POST",
    url: "/auth/login",
    data: user,
    success: (result) => {
      console.log(result);
      polipop.add({
        type: "success",
        title: "Success",
        content: `Welcome ${result.user.firstname} :)`,
      });
      console.log(result);
    },
    error: (xhr) => {
      polipop.add({
        type: "error",
        title: "Error",
        content: xhr.responseText,
      });
    },
  });
});
