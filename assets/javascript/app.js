//global variables
var unansweredCount = 0;
var winCount = 0;
var lossCount = 0;

//timer



//CLICK FUNCTIONS

//game start
	$("#question1").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#question6").hide();
	$("#question7").hide();
	$("#question8").hide();
	$("#tallyCount").hide();
	$("#results").hide();

//first screen
$("#button").click(function() {
	$("#enter").hide();
	$("#question1").show();
	$("#tallyCount").show();
	var count = 30;
    var counter = setInterval (timer, 1000);
	function timer () {
	
	count -= 1;
	if(count == 0){
		clearInterval(counter);
		unansweredCount++;
		$("#unansweredCount").html(unansweredCount);	
	}
	document.getElementById('seconds').innerHTML = count;
}
});

//quest1
$("#a1-1").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question1").hide();
	$("#question2").show();
});
$("#a1-2").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question1").hide();
	$("#question2").show();
});
$("#a1-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question1").hide();
	$("#question2").show();
});
$("#a1-4").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question1").hide();
	$("#question2").show();
});

//quest2

$("#a2-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question2").hide();
	$("#question3").show();
});
$("#a2-2").click(function() {
	console.log("loss")
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question2").hide();
	$("#question3").show();
});
$("#a2-3").click(function() {
	console.log("loss")
	winCount++;
	$("#winCount").html(winCount)
	$("#question2").hide();
	$("#question3").show();
});
$("#a2-4").click(function() {
	console.log("loss")
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question2").hide();
	$("#question3").show();
});


//quest3
$("#a3-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question3").hide();
	$("#question4").show();
});
$("#a3-2").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question3").hide();
	$("#question4").show();
});
$("#a3-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question3").hide();
	$("#question4").show();
});
$("#a3-4").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question3").hide();
	$("#question4").show();
});

//quest4
$("#a4-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question4").hide();
	$("#question5").show();
});
$("#a4-2").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question4").hide();
	$("#question5").show();
});
$("#a4-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question4").hide();
	$("#question5").show();
});
$("#a4-4").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question4").hide();
	$("#question5").show();
});


//quest5
$("#a5-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question5").hide();
	$("#question6").show();
});
$("#a5-2").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question5").hide();
	$("#question6").show();
});
$("#a5-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question5").hide();
	$("#question6").show();
});
$("#a5-4").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question5").hide();
	$("#question6").show();
});


//quest6
$("#a6-1").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question6").hide();
	$("#question7").show();
});
$("#a6-2").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question6").hide();
	$("#question7").show();
});
$("#a6-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question6").hide();
	$("#question7").show();
});
$("#a6-4").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question6").hide();
	$("#question7").show();
});

//quest7
$("#a7-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question7").hide();
	$("#question8").show();
});
$("#a7-2").click(function() {
	winCount++;
	$("#winCount").html(winCount)
	$("#question7").hide();
	$("#question8").show();
});
$("#a7-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question7").hide();
	$("#question8").show();
});
$("#a7-4").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question7").hide();
	$("#question8").show();
});


//quest8
$("#a8-1").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question8").hide();
	$("#results").show();
	$("#score").html(winCount)
});
$("#a8-2").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question8").hide();
	$("#results").show();
	$("#score").html(winCount)
});
$("#a8-3").click(function() {
	lossCount++;
	$("#lossCount").html(lossCount)
	$("#question8").hide();
	$("#results").show();
	$("#score").html(winCount)
});
$("#a8-4").click(function() {
	winCount++;
	$("#winCount").html(winCount);
	$("#question8").hide();
	$("#results").show();
	$("#score").html(winCount)
});


