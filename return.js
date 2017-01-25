console.log("even");
function isEven(num)
{
if(num % 2 === 0)
{
return true;
}
else
{
return false;
}
}

console.log("factorial");

function fact(num)
{
	var one=1;

	for(i=1;i<=num;i++)
	{
		one = one*i;

	}
	return one;

}

console.log("kababtosnake");

function k2s(str)
{
	//var rep=str.replace("-","_");
	var rep=str.replace(/-/g,"_");
	return rep;
}
