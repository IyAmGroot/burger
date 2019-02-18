$(function() {
  //eat me button logic
  $(".eatMe").on("click", function() {
    var id = $(this).attr("data-id");
    //eatMe = 1 is same as true.
    var eatMe = 1;

    var newEatState = {
      devoured: eatMe
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(function() {
      location.reload();
    });
  });

  //submit button logic
  $(".burgerForm").on("submit", function(event) {
    event.preventDefault();

    //burger object
    var newBurger = {
      burger_name: $("#burgerText")
        .val()
        .trim(),
      devoured: 0
    };
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
});
