// exercise 1
/*
function animals(heads, legs){
var Chickens =(4 * heads - legs) / 2;
var Cows = heads - Chickens;
 if ( Chickens < 0){
	 alert ('Число отрицательное');
 } else if ( Cows < 0){
	 alert ('Число отрицательное');
 } else {
	 alert ('Ok');
 }
 return [Chickens, Cows]
}
console.log(animals(72, 200));
*/

// exercise 2

/*
function howManyAnimals(number){
	var reaction = ["Чего так мало?", "Более чем достаточно", "Почему их так много", "Ого, 101 далматинец!"];
	if (number <= 10) {
		console.log (reaction[0]);
	} else if (number <= 50){
		console.log (reaction[1]);
	} else if (number == 101) {
		console.log (reaction[3]);
	} else {
		console.log(reaction[2]);
	}
	return number
}	
	console.log(howManyAnimals(101));
*/
	
// exercise 3

	/*
	var num = 1;
for ( ; num < 101; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
      console.log( num,  "= FizzBuzz" )
    }else if ( num%5 === 0 ){
       console.log( num, " = Buzz" );
    }else if ( num%3 === 0 ){
       console.log( num, " = Fizz" );
    }else{
       console.log( num );
    }
}*/

