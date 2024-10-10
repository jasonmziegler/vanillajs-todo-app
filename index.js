// index.js

const todoUl = document.getElementById("thingsToDoList");
const addToDoInput = document.getElementById("addToDoInput");
const addToDoButton =document.getElementById("addToDoButton");

addToDoInput.value = "asdfasdf";

console.log(addToDoInput);
// create an empty list to hold todos
const thingsToDoList = [];
// create an empty list to hold completed items
const completedToDoList = [];
// add an event listener to the "addTodoButton" button
// create an onClick function
function addSomethingToDo(thingToDo) {
  // // capture input
// // push to todoList
thingsToDoList.push(thingToDo);
// // clear "addTodoButton" input
let listItem = document.createElement('li');
listItem.textContent = thingToDo;
displayThingToDo(listItem);
}

function captureTodoInput(){
  // read what is in the input and store in a variable
  let input = addToDoInput.value;
  // console.log(to test)
  console.log("Input: ", input);
  // clear input
  addToDoInput.value = "";
  // return variable
  return input;
}


function addToDoButtonOnClick() {
console.log("hello");
addSomethingToDo(captureTodoInput());
}
addToDoButton.onclick = addToDoButtonOnClick;

// add todos to the DOM
function displayThingToDo(newTodo) {
  todoUl.append(newTodo);
}




