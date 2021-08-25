
/*function f1() {

    document.getElementById("dropdown").style.display = "block";
   
}
 */
function f1(){
var x = document.getElementById("dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
/*if (x.style.animation === "fadeIn 0.3s ease-in-out") {
    x.style.animation = "fadeOut 0.3s ease-in-out";
  } else {
    x.style.animation = "fadeIn 0.3s ease-in-out";
  }
  */
}


/*this for slide animation */

function f2(){
  var y = document.getElementById("slide-02");
      y.style.display = "none";
}
  
function f3(){
  var y = document.getElementById("slide");
  var z=documnet.getElementById("slide-02")
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    