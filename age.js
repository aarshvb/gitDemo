var age=prompt("enter your age: ");
console.log(age);
if(age<0)
	console.log("invalid age");
else if (age==21)
	console.log("age is 21");
else if(!((age % 2)==0))
	console.log("age is odd");
else if(Math.sqrt(age) % 1 === 0)
	console.log("age is perfect square");
else
	console.log("----"); 