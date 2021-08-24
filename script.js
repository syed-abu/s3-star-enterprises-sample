
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