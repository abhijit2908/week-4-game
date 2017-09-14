var ruby;
var sapphire;
var emrald;
var topaz;
var targetScore;
var additiveScore=0;
var wins=0;
var losses=0;

function numbergenerator(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

targetScore=numbergenerator(19,120);
console.log(targetScore);
ruby=numbergenerator(1,12);
console.log("RUby"+ruby);
emrald=numbergenerator(1,12);
console.log("Emarald"+emrald);
topaz=numbergenerator(1,12);
console.log("Topaz"+topaz);
sapphire=numbergenerator(1,12);
console.log("Sapphire"+sapphire);

function reset(){
targetScore=numbergenerator(19,120);
console.log(targetScore);
ruby=numbergenerator(1,12);
console.log("RUby"+ruby);
emrald=numbergenerator(1,12);
console.log("Emarald"+emrald);
topaz=numbergenerator(1,12);
console.log("Topaz"+topaz);
sapphire=numbergenerator(1,12);
console.log("Sapphire"+sapphire);
};

$(document).ready(function(){
$("#ruby").click(function(){
		additiveScore=additiveScore+ruby;
		console.log("RUby"+ruby);
		console.log(additiveScore);
		decide();
});
});

$(document).ready(function(){
$("#sapphire").click(function(){
		additiveScore=additiveScore+sapphire;
		console.log("Sapphire"+sapphire);
		console.log(additiveScore);
		decide();
});
});

$(document).ready(function(){
$("#topaz").click(function(){
		additiveScore=additiveScore+topaz;
		console.log("Topaz"+topaz);
		console.log(additiveScore);
		decide();
});
});

$(document).ready(function(){
$("#emrald").click(function(){
		additiveScore=additiveScore+emrald;
		console.log("Emarald"+emrald);
		console.log(additiveScore);
		decide();
});
});

function decide(){
	if (additiveScore === targetScore ){
	wins++;
	console.log("wins " + wins);
	reset();
}
 else if(additiveScore > targetScore){
 	losses++;
 	console.log("losses " + losses);
 	reset();
 }
}