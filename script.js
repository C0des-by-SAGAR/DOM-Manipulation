 var button = document.getElementById("enter");
 var input = document.getElementById("userinput");
 var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var but = document.createElement("button");
	but.appendChild(document.createTextNode("delete"));
	but.classList.add("del");
	li.appendChild(but);
	input.value = "";
}

function addListAfterClick() {
 	if(inputLength() > 0) {
	 	createListElement();
	 }
 }

function addListAfterKeypress(event) {
 	if(inputLength() > 0 && event.key === "Enter") {
	 	createListElement();
	 }
 }

 button.addEventListener("click", addListAfterClick);

 input.addEventListener("keydown", addListAfterKeypress); 

// add event listener for all the child elements
// of of the "ul" element.
ul.addEventListener("click", (event) => {
  const target = event.target;
  
  if (target.tagName == "BUTTON") {
    target.parentElement.remove();
  } else if (target.tagName == "LI") {
    target.classList.toggle("done");
  }
});