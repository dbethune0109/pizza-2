function Pizza(quantity, size) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.cost = function() {
  var total = 0;
  if (this.size === "small") {
    total = total + 5;
  } else if (this.size === "medium") {
    total = total + 7;
  } else {
    total = total + 9;
  }
  total = total + this.toppings.length;
  total = total * this.quantity;
  return total;
};

function Topping(name) {
  this.name = name;
}

$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedQuantity = $("#amount").val();
    var inputtedSize = $("#size").val();
    var newPizza = new Pizza(inputtedQuantity, inputtedSize);

    $("input:checkbox[name=topping]:checked").each(function() {
      var inputtedTopping = $(this).val();
      var newTopping = new Topping(inputtedTopping);
      newPizza.toppings.push(newTopping);
    });

    var totalCost = newPizza.cost();

    $("#pizza-price").show();
    $("#order-price").text(totalCost);

  });
});
