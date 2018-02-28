var isMember = true;

///////////////////////////////////////////////////////

var feeAmt = "";

// if isMember === true
if (isMember) {
	feeAmt = "$2.00";
} else {
	feeAmt = "$10.00";
}

console.log("The fee is " + feeAmt);

///////////////////////////////////////////////////////

// Here's how we'd accomplish the same thing using a ternary operator and less code!
var feeInfo = "The fee is " + (isMember === true ? "$2.00" : "$10.00");

// what's the fee for me to participate?
console.log(feeInfo);