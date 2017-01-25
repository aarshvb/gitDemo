// var ans=prompt("Are we there yet?");
// //if(ans==="yes")
// //{
// //	alert("we made it");
// //}
// //else
// //	{
// //		var ans=prompt("Are we there yet?");
// //	}

// while(ans!=="yes" && ans!=="yeah")
// {
// 	var ans=prompt("Are we there yet?");
// }

// alert("we made it");

var ans = prompt("Are we there yet?");

while(ans.indexOf("yes") === -1 )
{
	var ans = prompt("Are we there yet?");

}

alert("we made it.");	