$(function () {
    register();
});

function register() {
    $("#register").click(function () {
        $("#registered").text("Successfully registered");
        $("#remainingSeats").text($("#remainingSeats").text() - 1);
    });
}