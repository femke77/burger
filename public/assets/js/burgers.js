$(function(){

    $("#addBtn").on("click", (event) => {
        event.preventDefault();
      

        var burger = {
            burger_name: $("#newBurgerBox").val().trim()
        }

        $.post("/api/burgers", burger, () => {
            console.log("new burger created");
            location.reload();
        });

    });










});