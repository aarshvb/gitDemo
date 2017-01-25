console.log("connected");
var todos=["Buy new Turtle"];
var input = prompt("What would you like to do?");


while(input !== "quit")
{

if(input === "list")
{
	listTodo();

	
}
else if (input === "new")
{
	addTodo();
}
else if (input === "delete")
{
	deleteTodo();
	
}

function listTodo()
{
	todos.forEach(function(todo,index){
	console.log(index + ": " + todo);	
	});
}

function addTodo()
{
	var newtodo = prompt("Enter new todo");
	todos.push(newtodo);

}

function deleteTodo()
{	
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted todo");

}

var input = prompt("What would you like to do?");

}
console.log("you quit the app");