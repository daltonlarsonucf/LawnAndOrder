var modal = document.getElementById("myModal");
var open = document.getElementById("openModal");
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

var modal2 = document.getElementById("nothingModal");
var open2 = document.getElementById("openNothing");
var span2 = document.getElementsByClassName("close")[0];

open2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
