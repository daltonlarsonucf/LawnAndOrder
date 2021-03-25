var modal1 = document.getElementById("myModal");
var open1 = document.getElementById("openModal");
var span1 = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("nothingModal");
var open2 = document.getElementById("openNothing");
var span2 = document.getElementsByClassName("close")[0];

open.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

open.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
