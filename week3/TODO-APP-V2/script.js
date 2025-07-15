function addTodo() {
  // importing value from input of DOM
  const valueOfInput = document.querySelector("input").value;

  // child
  const spanEle = document.createElement("span");
  spanEle.innerHTML = valueOfInput;

  // child
  const btnEle = document.createElement("button");
  btnEle.innerHTML = "Delete";

  // parent of span and button tags
  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(btnEle);

  // parent of div tag
  document.querySelector("body").appendChild(divEle);  
}