//var modal1 = document.getElementById("myModal");
//var open1 = document.getElementById("openModal");
var modal1 = document.getElementsByClassName("modal")[0];
var open1 = document.getElementsByClassName("my-modal")[0];
var span1 = document.getElementsByClassName("close")[0];

open1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event1) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementsByClassName("modal")[1];
var open2 = document.getElementsByClassName("my-modal")[1];
var span2 = document.getElementsByClassName("close")[1];

open2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event2) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("gardenModal");
var open3 = document.getElementById("openGarden");
var span3 = document.getElementsByClassName("close")[2];

open3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event3) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4 = document.getElementById("pottingModal");
var open4 = document.getElementById("openPotting");
var span4 = document.getElementsByClassName("close")[3];

open4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event4) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

var modal5 = document.getElementById("eggplantModal");
var open5 = document.getElementById("openEggplant");
var span5 = document.getElementsByClassName("close")[4];

open5.onclick = function() {
  modal5.style.display = "block";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event5) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

var modal6 = document.getElementById("butterflyModal");
var open6 = document.getElementById("openButterfly");
var span6 = document.getElementsByClassName("close")[5];

open6.onclick = function() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event6) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
