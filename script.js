///////////////////////////////////////
// Lecture: Hoisting

//functions 

// calling the function before the function is invoked works with function declaration, because it is hoisted in the creation phase
calculateAge(1990);

function calculateAge(year) {
	console.log(2018 - year);
}


//however that does not work with function expressions because it does not get hoisted first.
var retirement = function(year) {
	console.log(65 - (2018 - year));
}

retirement(1990);

// variables

var age = 29;
console.log(age);

function foo() {
	var age = 65;
	console.log(age);
}
// we get 2 different results because the age variable from the function is stored in a different execution context, while the age variable outside of the function is stored in the global execution object.
foo();
console.log(age);







///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
		
		// had to move function third() inside function second() to get it within the scope chain. Outside of the function it didn't have access to variables b and c.
		function third() {
          var d = 'John';
          console.log(a + b + c + d);
        }
    }
}

// function third() used to be here
/*
function third() {
  var d = 'John';
  console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword








