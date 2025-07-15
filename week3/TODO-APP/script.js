function randomDelete() {
  const element = document.querySelector("h2");
  // const parentElement = element.parentElement;
  // parentElement.removeChild(element);

  const parentElement = document.getElementById("parentEle");
  parentElement.removeChild(element);
}

const divEle = document.createElement("div");
divEle.innerHTML = "Hariom and Santosh Shah";

// one way
document.querySelector("body").appendChild(divEle);

// another way
// document.getElementById("parentEle").appendChild(divEle);

// one more way
const addingDiv = document.querySelector("body");
addingDiv.appendChild(divEle);
