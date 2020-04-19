$(".deleteMe").on("click", function (event) {
    event.preventDefault();
    const idToDelete = $(this).data("id")
    $.ajax({
        method: "DELETE",
        url: `/api/products/${idToDelete}`
    }).then(data => {
        location.reload();
    })
})

$("#createProductForm").on("submit", function (event) {
    event.preventDefault();
    const newProduct = {
        product_name: $("#product_name").val(),
        price: $("#price").val()
    }
   $.ajax({
       method:"POST",
       data:newProduct,
       url:"/api/products"
   }).then(data=>{
       location.href = "/"
   })
})

$("#editProductForm").on("submit", function (event) {
    event.preventDefault();
    const idToEdit = $("#editId").val();
    const newProduct = {
        product_name: $("#edit_product_name").val(),
        price: $("#edit_price").val()
    }
   $.ajax({
       method:"PUT",
       data:newProduct,
       url:`/api/products/${idToEdit}`
   }).then(data=>{
       location.href = `/products/${idToEdit}`
   })
})

$("#createReviewForm").on("submit",function(event){
    event.preventDefault();
    const ProductId = $("#ProductIdInput").val();
    const reviewObj = {
        title:$("#review_title").val(),
        author:$("#review_author").val(),
        body:$("#review_body").val(),
        ProductId:ProductId
    }
    $.ajax({
        method:"POST",
        data:reviewObj,
        url:"/api/reviews"
    }).then(data=>{
        location.reload();
    })
})