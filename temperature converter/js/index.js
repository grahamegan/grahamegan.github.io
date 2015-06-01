// * input celcius
// * hit convert button
// ** get temperature
// ** use celcius to fahrenheit formula to convert
// ** show on page in fahrenheit
// *** alter page, e.g. background image, for temperature range
// **** 0 - 32, 32 - 40, 40 - 50, 50 - 70, 70 - 100, 100+

console.log("is this thing on?")

$("#submit").click(convert)

function convert() {
	// console.log("covert clicked");
	var stringOne = $("#a").val();
	// var stringTwo = $("#b").val();

	var numOne = parseFloat(stringOne);
	// console.log("string --> value")
	// var numTwo = parseFloat(stringTwo);

	var numTwo = numOne * 1.8 + 32
	// console.log("c --> F");

	$("#b").attr("placeholder", numTwo)

	if (numTwo < 32) {
		// console.log("conversion color");
		$("body").css("background", "purple");
	} else if (numTwo === 32 || numTwo < 40){
		$("body").css("background", "blue");
	} else if (numTwo === 40 || numTwo < 50){
		$("body").css("background", "green");
	} else if (numTwo === 50 || numTwo < 70){
		$("body").css("background", "yellow");
	} else if (numTwo === 70 || numTwo < 100){
		$("body").css("background", "orange");
	} else
		$("body").css("background", "red");
}
