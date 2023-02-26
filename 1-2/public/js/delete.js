//delete user function
function deleteProduct() {
  const id = $("form").children()[0].children[1].value;
  $.ajax({
    type: "DELETE",
    url: `/product/remove-product/${id}`,
    success(_data) {
      window.location.href = "http://localhost:1010/products-page";
    },
    error(err) {
      console.log(err);
    },
  });
}
