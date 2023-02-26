//update user function
function updateProduct() {
  let updatedProduct = {
    id: modal.children[0].children[1].value,
    name: modal.children[1].children[1].value,
    date: modal.children[2].children[1].value,
  };
  // let errorMessage = validator(updatedUser, "update");
  // if (!!errorMessage) {
  //   alert(errorMessage);
  //   return;
  // }
  id = modal.children[0].children[1].value;
  $.ajax({
    type: "PUT",
    url: `/product/editProduct/${id}`,
    data: updatedProduct,
    success(data) {
      //render new table and hide modal
      renderTable();
      modal.style.display = "none";
      modal.parentElement.style.display = "none";
    },
    error(err) {
      console.log(err);
    },
  });
}
