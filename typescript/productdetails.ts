 function quantity()
 {
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var total = quantity * price;
    document.getElementById("total").innerHTML = "Total: $" + total;
 }