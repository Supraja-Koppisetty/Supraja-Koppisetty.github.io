var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var delButton = document.createElement('button');
	 delButton.appendChild(document.createTextNode('Delete'));
	 delButton.classList.add('del');
	 li.appendChild(delButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function toggleTheListItem(event){

	 event.target.classList.toggle('done');
}
function removeListAfterClick(event){
	event.target.parentElement.remove();
}
var delButton = document.querySelectorAll('.del');
li.forEach(function(element, index){

	element.addEventListener("click", toggleTheListItem);


});

delButton.forEach(function(element){
	element.addEventListener('click', removeListAfterClick);
});


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
