$(document).ready(function () {

    // The player 1 and player 2 result are set to null first
    let p1_dice = null;
    let p2_dice = null;

    // This function rolls the dice values
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // This will update the dice image with the results of the roll
    function updateDice(player, diceImage) {
        let result = rollDice();
        diceImage.attr("src", "images/dice" + result + ".png");

        if (player === 1) {
            p1_dice = result;
        } else {
            p2_dice = result;
        }

        if  (p1_dice !== null && p2_dice !== null) {
            if  (p1_dice > p2_dice) {
                $("h1").text("🚩 Player 1 Wins!");
            } else if (p2_dice >  p1_dice) {
                $("h1").text("Player 2 Wins! 🚩");
            } else {
                $("h1").text("Draw!");
            }

            $(".dice button").prop("disabled", true);
            $(".btn-secondary").prop("disabled", false);
        }
    }

    // This is the button for player 1
    $(".dice button:first").on("click", function () {
        if (!$(this).prop("disabled")) {
            updateDice(1, $(".img1"));
            $(this).prop("disabled", true);

        }
    });

    // This is the button for the player 2
    $(".dice button:last").on("click", function () {
        if (!$(this).prop("disabled")) {
            updateDice(2, $(".img2"));
            $(this).prop("disabled", true);
        }
    });

    // This is basically the playagain function where it sets the values back to default
    $(".btn-secondary").on("click", function () {
        p1_dice = null;
        p2_dice = null;

        $("h1").text("Dice Game");

        $(".img1").attr("src", "images/dice6.png");
        $(".img2").attr("src", "images/dice6.png");

        $(".dice button").prop("disabled", false);
        $(this).prop("disabled", true);
    });
});
