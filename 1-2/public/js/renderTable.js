//table render function
function renderTable() {
  $.ajax({
    type: "GET",
    url: "/product/get-all-products",
    success(data) {
      const productData = data;
      //reset table
      table.innerHTML = `<tr>
          <th scope="col">No</th>
          <th id="id" scope="col">ID</th>
          <th id="name" scope="col">Title</th>
          <th id="price" scope="col">Price</th>
          <th id="rating" scope="col">Rating</th>
          <th id="stock" scope="col">Stock</th>
          <th id="brand" scope="col">Brand</th>
          <th id="category" scope="col">Category</th>
        </tr>`;
      //create rows
      productData.forEach((product, indexOfProduct) => {
        table.insertRow();
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = indexOfProduct + 1;
        for (const key in product) {
          let newCell =
            table.rows[table.rows.length - 1].insertCell();
          newCell.textContent = product[key];
        }
      });
      //assign onclick function for each row (row 2 -...) for rendering modal
      for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
          getProductData(this);
        };
      }
      //assign/update selected user and openUp modal for it
      function getProductData(productRow) {
        const id = productRow.children[1].innerText;
        window.location.href = `http://localhost:1010/product/${id}/edit`;
      }
    },
    error(err) {
      console.log(err);
    },
  });
}
