// index.js
console.log('hello world');

const todoUl = document.getElementById("thingsToDoList");

// console.log(document.getElementsByTagName('input')[0]);

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
}

// add todos to the DOM
function displayThingsToDo(thingsToDo) {
  console.log("thingsToDo: ", thingsToDo);
}


let listItem = document.createElement('li');
listItem.textContent = "Display Text Content";

todoUl.append(listItem);
