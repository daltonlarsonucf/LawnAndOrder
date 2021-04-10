var valentine = document.getElementById("valentine-button");

function Valentine() {
  console.log("hello");
  console.log(valentine.innerHTML);
  console.log(valentine.style.color);

  if(valentine.style.backgroundColor == "#43994f"){
    valentine.style.backgroundColor = "white";
    console.log("hello");
  }else if(valentine.style.backgroundColor == "white"){
    valentine.style.backgroundColor = "#43994f";
  }

  if(document.getElementsByClassName("ev-button")[0].style.backgroundColor == "#43994f"){
    document.getElementsByClassName("ev-button")[0].style.backgroundColor = "white";
    console.log("hello");
  }else if(document.getElementsByClassName("ev-button")[0].style.backgroundColor == "white"){
    document.getElementsByClassName("ev-button")[0].style.backgroundColor = "#43994f";
  }
}
