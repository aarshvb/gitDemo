alert("hello");

var num = 4;

var guess=prompt("guess the number: ");
//alert(guess);

if(Number(guess) === num)
{
	alert("correct");
}
else if(Number(guess) > num)
{	
	alert("this is higher than the number");
}
else
{
	alert("this is lower than the number");
}

