//Global
var randomResult;
var lost;
var win;

// setters
// getters

// $(".crystal").attr('class')


randomResult = Math.floor(Math.random() * 60) + 10; //hoisting random number never goes below 10
// console.log(randomResult);

$("#result").html('Random Result: ' + randomResult);
for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(randomNumber);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomData": random
        });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function() {
    
    console.log($(this).attr("randomData"));

})




// pseudo coding

        //a game with 4 crystals and random result
        //every crystal needs to have random number between 1 - 12
        //a new random number should be generated every time we win or lose
        //to those crystals
        // When clicking any crystal, it should add with the previous result
        // Until it equals the total score
        //if it is greater than the Random Result, we decrement a lost counter 
        //if it is equal, then we incremet a win counter