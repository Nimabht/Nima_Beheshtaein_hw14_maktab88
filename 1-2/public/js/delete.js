//delete user function
function deleteProduct() {
  let id = selectedProduct.id;
  $.ajax({
    type: "DELETE",
    url: `/product/removeProduct/${id}`,
    success(_data) {
      renderTable();
      modal.style.display = "none";
      modal.parentElement.style.display = "none";
      location.reload();
    },
    error(err) {
      console.log(err);
    },
  });
}
