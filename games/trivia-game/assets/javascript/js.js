$(document).ready(function(){

    //---ARRAY INFORMATION---//

    // Creating Array for Questions, Answers, Correct Answer
    var questionInformation = [
        {
            title: "Question - 1",
            question: "Which American President has received the Noble Peace Prize?",
            choice: ["  Not Donald Trump", "  Mike Pence", "  President And Habitat For Humanity Home Builder, Jimmy Carter", "  President Barack Obama"],
            answer: 3,
        },

        {
            title: "Question - 2",
            question: "What is Caitlan's Favorite Dish?",
            choice: ["  Risotto", "  Polenta", "  Lasagna", "  All Of The Above"],
            answer: 0,
        },

        {
            title: "Question - 3",
            question: "What is a Black Hole?",
            choice: ["  A Hole That Is Black", "  A Region Of Spacetime Exhibiting Gravitational Acceleration So Strong That Nothing Can Escape From It", "  A Very Dark Hole", "  Answers A And C"],
            answer: 1,
        },
    ];

    //---VARIABLES---//
    var questionNumber = 0;
    var userAnswer = [];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var incompleteAnswers = 0;
    var counter = 10;
    var time;

    //---TIMER INFORMATION---//

    // Displaying Timer and Counter
    $("#display-4").text(counter);

    function countDown() {
        counter--;
        $("#display-4").text(counter);

        // when counter = 0, showResults
        if (counter === 0) {
            incompleteAnswers++;
            $('#results').modal('show');

            $("#incomplete").text(incompleteAnswers);
            $("#answer-text").text(" Incomplete.");

            console.log("Incomplete: " + incompleteAnswers);
            resetGame();
        }; 
    };


    // create resetGame function to add new questions
    function resetGame() {
        clearInterval(time);
        counter = 10
            $("#display-4").text(counter);
            time = setInterval(countDown, 1000);
        createQuestions();
        questionNumber++;

        if (questionNumber === questionInformation.length) {
            clearInterval(time);
            //showresult();
        }
    }

    // create questions to populate within HTML
    function createQuestions() {
        $(".card-header").text(questionInformation[questionNumber].title);
        $(".card-title").text(questionInformation[questionNumber].question);

        // identifying which html element to place my object information
        $("#radio-group").empty();
        for (var j = 0; j < 4; j++) {
            var answers = $("<li><input class='inputanswer' type='radio' q=" + questionNumber + " index=" + j + " name='q'/><span>" + questionInformation[questionNumber].choice[j] + "</span></li>");
            $("#radio-group").append(answers);
        }
        $(".inputanswer").on("click", function(){
            userAnswer = parseInt($(this).attr("index"))
            var q = $(this).attr("q")
            $('#results').modal('show');

            console.log(userAnswer);
            console.log(questionInformation[q].answer);
            if (userAnswer === questionInformation[q].answer) {
        
                console.log("Question Correct Answer:" + questionInformation[q].answer);
                correctAnswers++;
                $("#correct").text(correctAnswers);
                $("#answer-text").text(" Correct!")
                resetGame()
            }
            else {
                wrongAnswers++;
                $("#wrong").text(wrongAnswers);
                $("#answer-text").text(" Incorrect.")
                resetGame()
            }
        });
    }
    resetGame();
});
