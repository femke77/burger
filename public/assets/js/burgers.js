$(function () {

    //add a new burger
    $("#addBtn").on("click", (event) => {
        event.preventDefault();

        if ($("#newBurgerBox").val().length > 0) {
            var burger = {
                burger_name: $("#newBurgerBox").val().trim()
            }

            //ajax post to create new burger in database
            $.post("/api/burgers", burger, () => {
                console.log("new burger created");
                location.reload();
            });
        } else {
            alert("Burger name must be at least 1 character.")
        }


    });

    //eat a burger
    $(".devourBtn").on("click", function () {
        var id = $(this).attr("data-id");

        var burger = {
            devoured: 1
        }

        //put request to update a burger using its button data-id
        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: burger
        }).then(
            function () {
                console.log("devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });










});