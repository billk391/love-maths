//wait for the DOM to finsih loading before running the game
//Get the button elements and add the event listeners to them

document.addEventListener("DOMContentLoaded", function) {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!")
            } else {
                let gametype = this.getAttribute("data-type");
                alert('You Clicked ${gametype}');
            }
        })
    }
}


function runGame() {

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
