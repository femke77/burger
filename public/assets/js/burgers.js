$(function () {

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

    $(".devourBtn").on("click", function () {
        var id = $(this).attr("data-id");
        console.log(`id is ${id}`)
        console.log(this)

        var burger = {
            devoured: 1
        }

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