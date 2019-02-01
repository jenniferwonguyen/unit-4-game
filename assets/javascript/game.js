//Global
var randomResult;
var lost = 0;
var win = 0;
var previousNum = 0; 

var startGame = function () {
randomResult = Math.floor(Math.random() * 60) + 10; //hoisting random number never goes below 10

//a game with 4 crystals and random result
    $("#result").html('Random Result: ' + randomResult);
    for(var i = 0; i < 4; i++) {
 
// every crystal needs to have random number between 1 - 12
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal= $("<div>");
        crystal.attr({
            "class": 'crystalBox',
            "randomData": random
        });
        crystal.html(random);

    $(".crystals").append(crystal);

    }
}

    var resetandStartGame = function () {
        
        $(".crystals").empty();

        randomResult = Math.floor(Math.random() * 60) + 10; //hoisting random number never goes below 10

//a game with 4 crystals and random result
    $("#result").html('Random Result: ' + randomResult);
        
    for(var i = 0; i < 4; i++) {

// every crystal needs to have random number between 1 - 12
        var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomData": random
        });
        crystal.html(random);

    $(".crystals").append(crystal);

    }
}
    resetandStartGame();

// When clicking any crystal, it should add with the previous result    
    $(".crystal").on("click", function() {
    
    var num = parseInt($(this).attr("randomData"));
    
    previousNum += num;

    console.log(previousNum);

    if(previousNum > randomResult) {
        lost--;
        $("#lost").html(ost);

        resetandStartGame();
    }
    else if (previousNum === randomResult) {
        win++;
        $('#win').html(win);

        resetandStartGame();
    }

});


// pseudo coding

        //a game with 4 crystals and random result
        //every crystal needs to have random number between 1 - 12
        //a new random number should be generated every time we win or lose
        //to those crystals
        // When clicking any crystal, it should add with the previous result
        // Until it equals the total score
        //if it is greater than the Random Result, we decrement a lost counter 
        //if it is equal, then we incremet a win counter