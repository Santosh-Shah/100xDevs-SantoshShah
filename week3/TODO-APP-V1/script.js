let ctrl = 1;
function addTodo() {
  const inputEle = document.querySelector("input");
  const value = inputEle.value;

  const newEle = document.createElement("div");
  newEle.setAttribute("id", ctrl);

  
  newEle.innerHTML = "<div>" + value + '</div><button onclick="deleteTodo('+ctrl+')">Delete</button>';
  document.querySelector("body").appendChild(newEle);

  ctrl += 1;
}

function deleteTodo(index) {
  const deleteEle = document.getElementById(index);
  deleteEle.parentNode.removeChild(deleteEle);
}


