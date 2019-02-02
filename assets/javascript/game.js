//Global
var randomResult;
var lost = 0;
var win = 0;
var totalNum = 0; 

var startGame = function () {
    totalNum = 0
randomResult = Math.floor(Math.random() * 60) + 10; //hoisting random number never goes below 10

//a game with 4 crystals and random result
    $("#result").empty()
    $("#result").html('Random Result: ' + randomResult);
    $("#resultBox").empty()
        $("#resultBox").html("Total: " + 0)

    for(var i = 0; i < 4; i++) {
 
// every crystal needs to have random number between 1 - 12
        var random = Math.floor(Math.random() * 12) + 1;
            // jQuery .val()
            // assign each crystal a value 
            $('.crystal1').val(Math.floor(Math.random() * 12) + 1)
            $('.crystal2').val(Math.floor(Math.random() * 12) + 1)
            $('.crystal3').val(Math.floor(Math.random() * 12) + 1)
            $('.crystal4').val(Math.floor(Math.random() * 12) + 1)


    }
}


startGame()

// When clicking any crystal, it should add with the previous result    
    $(".crystals").on("click", function() {
        console.log('click');
        console.log($(this).val())
        
    totalNum += parseInt($(this).val())
        console.log(totalNum);
        
        // put the totalNum on DOM- PUT IN SCOREBOX
        // $("#win").html('Win: ' + totalNum);
        // $("#lost").html('Lost: ' );


        // total from each click
        $("#resultBox").html('Total: ' + totalNum);


    if(totalNum > randomResult) {
        console.log('loss');
        
        lost++;
        $("#lost").html(lost);
        startGame();
    }
    else if (totalNum === randomResult) {
        console.log('win');
        
        win++;
        $('#win').html(win);

        startGame();
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