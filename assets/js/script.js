//wait for the DOM to finsih loading before running the game
//Get the button elements and add the event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert('You Clicked ${gametype}');
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubractQuestion() {

}

function displayMultiplyQuestion() {

}
