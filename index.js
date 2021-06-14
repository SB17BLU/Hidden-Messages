//this code will run when the website loads
document.querySelector("img").style.display = "none";
document.querySelector("h1").style.display = "none";
var showing = false;

//functions
function show_message() {
  document.querySelector("img").style.display = "block";
  document.querySelector("h1").style.display = "block";
  showing = true;
}

function hide_message() {
  document.querySelector("img").style.display = "none";
  document.querySelector("h1").style.display = "none";
  showing = false;
}

function button_pressed() {
  if (showing == false) {
    show_message()
  }
   else if (showing == true) {
     hide_message()
  }
}
