// index.js

const todoUl = document.getElementById("thingsToDoList");
const completedTodoOl = document.getElementById("completedToDoList")
const addToDoInput = document.getElementById("addToDoInput");
const addToDoButton =document.getElementById("addToDoButton");

addToDoInput.value = "";

console.log(addToDoInput);
// create an empty list to hold todos
const thingsToDoList = [];
// create an empty list to hold completed items
const completedToDoList = [];
// How to know what list you are working with? do you need to have an array of objects?
// let workingList; 


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
  let itemRemoved = thingsToDoList.splice(index, 1);
  displayThingToDo(thingsToDoList);
  return itemRemoved;
}

function completeToDo(index) {
  console.log("Complete button clicked: ", thingsToDoList[index]);
  let completedItem = deleteToDo(index);
  // push to completed array
  completedToDoList.push(completedItem);
  // display completed list
  displayCompletedToDoList(completedToDoList);
}

function markToDoIncomplete(index) {
 console.log("markToDoIncomplete");
 addSomethingToDo(completedToDoList.splice(index, 1)[0]);
 displayCompletedToDoList(completedToDoList);
}

function displayCompletedToDoList(completedArray) {
  completedTodoOl.textContent = "";
  let listItem;
  let button;

  completedArray.map((value, index) => {
    listItem= document.createElement('li');
    listItem.key = index;
    listItem.textContent = value;
    
    button = document.createElement('button');
    button.textContent = "mark incomplete";
    button.onclick = () => markToDoIncomplete(index);
    listItem.appendChild(button);
    
    completedTodoOl.append(listItem);
  });
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




