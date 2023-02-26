//update user function

$("form").on("submit", function (e) {
  e.preventDefault();
  const id = this.children[0].children[1].value;
  let updatedProduct = {
    title: this.children[1].children[1].value,
    price: this.children[2].children[1].value,
    rating: this.children[3].children[1].value,
    stock: this.children[4].children[1].value,
    brand: this.children[5].children[1].value,
    category: this.children[6].children[1].value,
  };
  $.ajax({
    type: "PUT",
    url: `/product/update-product/${id}`,
    data: updatedProduct,
    success(_data) {
      window.location.href = "http://localhost:1010/products-page";
    },
    error(err) {
      console.log(err);
    },
  });
});

// function updateProduct() {
//   let updatedProduct = {
//     id: modal.children[0].children[1].value,
//     name: modal.children[1].children[1].value,
//     date: modal.children[2].children[1].value,
//   };
//   // let errorMessage = validator(updatedUser, "update");
//   // if (!!errorMessage) {
//   //   alert(errorMessage);
//   //   return;
//   // }
//   id = modal.children[0].children[1].value;
//   $.ajax({
//     type: "PUT",
//     url: `/product/editProduct/${id}`,
//     data: updatedProduct,
//     success(data) {
//       //render new table and hide modal
//       renderTable();
//       modal.style.display = "none";
//       modal.parentElement.style.display = "none";
//     },
//     error(err) {
//       console.log(err);
//     },
//   });
// }
