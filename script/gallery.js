var modal = document.getElementById("myModal");
var open = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("nothingModal");
var open = document.getElementById("openNothing");
var span = document.getElementsByClassName("close")[0];

open.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
