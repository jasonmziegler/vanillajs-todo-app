// index.js

const todoUl = document.getElementById("thingsToDoList");
const addToDoInput = document.getElementById("addToDoInput");
const addToDoButton =document.getElementById("addToDoButton");

addToDoInput.value = "";

console.log(addToDoInput);
// create an empty list to hold todos
const thingsToDoList = [];
// create an empty list to hold completed items
const completedToDoList = [];
// add an event listener to the "addTodoButton" button
// create an onClick function
function addSomethingToDo(thingToDo) {
// // push to todoList
thingsToDoList.push(thingToDo);
// update UI
displayThingToDo(thingsToDoList);
} // end of addSomethingToDo

// create handle on click edit button function

// create handle click delete button function

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
// console.log("hello");
addSomethingToDo(captureTodoInput());
}

addToDoButton.onclick = addToDoButtonOnClick;

function editToDo(index) {
console.log("Edit Button Clicked: ", thingsToDoList[index]);
}

function deleteToDo(index) {
  console.log("deleted button clicked: ", thingsToDoList[index]);
}

function completeToDo(index) {
  console.log("Complete button clicked: ", thingsToDoList[index]);
}

// add todos to the DOM
function displayThingToDo(updatedToDoList) {
  // map array of to <li>
  //todoUl.append(newTodo); from when passed just 1 todo
  todoUl.textContent = "";
  let listItem;
  let button;
  updatedToDoList.map((value, index) => {
    listItem= document.createElement('li');
    listItem.key = index;
    listItem.textContent = value;
    // add edit button
    button = document.createElement('button');
    button.textContent = "edit";
    button.onclick = () => editToDo(index);
    listItem.appendChild(button);
    button = document.createElement('button');
    button.textContent = "delete";
    button.onclick = () => deleteToDo(index);
    listItem.appendChild(button);
    button = document.createElement('button');
    button.textContent = "complete";
    button.onclick = () => completeToDo(index);
    listItem.appendChild(button);
// add event listener and
// add delete button
// add event listener
// add to list item
    
    todoUl.append(listItem);
  });


}




