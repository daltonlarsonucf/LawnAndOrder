var going = document.getElementById("valentine-going");
var notgoing = document.getElementById("valentine-notgoing");

function ValentineGoing() {
  if(notgoing.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing2.png"){
    going.src != "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going2.png";
    if(going.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going1.png"){
      going.src = "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going2.png";
    }else if(going.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going2.png"){
      going.src = "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going1.png";
    }
  }
}

function ValentineNotGoing() {
  if(going.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/going2.png"){
    notgoing.src != "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing2.png";
    if(notgoing.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing1.png"){
      notgoing.src = "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing2.png"
    }else if(notgoing.src == "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing2.png"){
      notgoing.src = "file:///Users/daltonlarson/Documents/GitHub/LawnAndOrder/images/notgoing1.png";
    }
  }
}
