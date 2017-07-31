function addTaskClicked() {
  var text = document.getElementById("text").value;
  addTask(text);
  document.getElementById("text").value = "";
}

function addTask(text) {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
