
//// chrystalGame object 
var chrystalGame = {
  value: 0,
  diamondValue: 0,
  rubyValue: 0,
  saphireValue: 0,
  emeraldValue: 0,
  wins: 0,
  losses: 0,
  totalScore: 0,
  ////////////function to set values
  setValues: function(){
  	this.value = Math.floor((Math.random() * 120) + 19);
  	this.diamondValue = Math.floor((Math.random() * 12) + 1);
  	this.rubyValue = Math.floor((Math.random() * 12) + 1);
  	this.saphireValue = Math.floor((Math.random() * 12) + 1);
  	this.emeraldValue = Math.floor((Math.random() * 12) + 1);
  	this.totalScore = 0;
	}
}

///////////////////////////////////////////
//start game when start button is pressed
//$("#begin").click(chrystalGame.setValues());
//console.log(chrystalGame.value);
$("#begin").click(function(){
//display target score
chrystalGame.setValues();
//chrystalGame.totalScore = 0;
$("#targetScore").html("Target Score:  " + chrystalGame.value);
$("#yourScore").html("Your Score:  " + chrystalGame.totalScore);

//if ruby chrystal is clicked
$("#ruby").click(function(){
   chrystalGame.totalScore += chrystalGame.rubyValue; 
   $("#yourScore").html("Your Score:  " + chrystalGame.totalScore);
    //see if you won
   if(chrystalGame.value === chrystalGame.totalScore){
	  	chrystalGame.wins++;
	  	$("#wins").html("Wins:  " + chrystalGame.wins);
	  	$("#message").html("Click begin to play again");
	}
//see if you lost
	if(chrystalGame.totalScore > chrystalGame.value){
		chrystalGame.losses++;
		$("#losses").html("Losses:  " + chrystalGame.losses);
		$("#message").html("Click begin to play again");
	}    
});
   
//if diamond chrystal is clicked
$("#diamond").click(function(){
   chrystalGame.totalScore += chrystalGame.diamondValue; 
   $("#yourScore").html("Your Score:  " + chrystalGame.totalScore);
    //see if you won
	if(chrystalGame.value === chrystalGame.totalScore){
		chrystalGame.wins++;
		$("#wins").html("Wins:  " + chrystalGame.wins);
		$("#message").html("Click begin to play again");
	}
//see if you lost
	if(chrystalGame.totalScore > chrystalGame.value){
		chrystalGame.losses++;
		$("#losses").html("Losses:  " + chrystalGame.losses);
		$("#message").html("Click begin to play again");
}
});

//if saphire chrystal is clicked
$("#saphire").click(function(){
   chrystalGame.totalScore += chrystalGame.saphireValue; 
   $("#yourScore").html("Your Score:  " + chrystalGame.totalScore);
   //see if you won
	if(chrystalGame.value === chrystalGame.totalScore){
		chrystalGame.wins++;
		$("#wins").html("Wins  :" + chrystalGame.wins);
		$("#message").html("Click begin to play again");
	}
//see if you lost
	if(chrystalGame.totalScore > chrystalGame.value){
		chrystalGame.losses++;
		$("#losses").html("Losses:  " + chrystalGame.losses);
		$("#message").html("Click begin to play again");
	}
});

//if emerald chrystal is clicked
$("#emerald").click(function(){
    chrystalGame.totalScore += chrystalGame.emeraldValue;
    $("#yourScore").html("Your Score:  " + chrystalGame.totalScore); 
    //see if you won
	if(chrystalGame.value === chrystalGame.totalScore){
		chrystalGame.wins++;
		$("#wins").html("Wins  :" + chrystalGame.wins);
		$("#message").html("Click begin to play again");
	}
//see if you lost
	if(chrystalGame.totalScore > chrystalGame.value){
		chrystalGame.losses++;
		$("#losses").html("Losses:  " + chrystalGame.losses);
		$("#message").html("Click begin to play again");
	}
});
//end of click function
});







