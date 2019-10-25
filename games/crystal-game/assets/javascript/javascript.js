
$(document).ready(function(){

// generate computer random number (19 - 120)
var computerRandomNumber = 0;

// create crystal array to house index values from html
var crystal = [];

// generate win, loss, and total variables
var wins = 0;
var loss = 0;
var yourTotal = 0;

// on .btn click
    $(".btn").on("click", function(event){
        event.preventDefault();
        
        // create variable for index values
        // index values have been assigned in html
        var index = $(this).attr("index")

        // add the valules to the array
        yourTotal = yourTotal + crystal[index];
        console.log(yourTotal)

        // replace text with the total value
        $("#your-total").text("$" + yourTotal + ".00");

        // if the total equals the computer number, than increase the wins and restart the game
        if (yourTotal === computerRandomNumber) {
            wins++;
            $("#wins").text(wins);
            restart();
        }

        // if the total is greater than the computer number, than increase the losses and restart the game
        else if (yourTotal > computerRandomNumber) {
            loss++;
            $("#loss").text(loss);
            restart();
        }
    });

    // restart function
    function restart() {

        // each games starts with a computer generated number (19-120)
        // each game starts with the number above, displayed in the 'order-total'
        computerRandomNumber = Math.floor((Math.random()* 101) + 19);
        $("#order-total").text("$" + computerRandomNumber + ".00");
        yourTotal = 0;
        $("#your-total").text(yourTotal);

        // generate crystal random numbers (1 - 12) and assign them to an index in the array
        crystal = [];
        for (var i = 0; i < 4; i++) {
            crystal[i] = Math.floor((Math.random()* 12) + 1);
        }
    
        console.log(crystal);
    };

    restart();
});