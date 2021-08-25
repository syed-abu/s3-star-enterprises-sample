
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

        
function nextbtn1(){

  var s1=document.getElementById("slide");
        var s2=document.getElementById("slide-02");
        var s3=document.getElementById("slide-03");

        s1.style.display = "none";
        s2.style.display = "flex";
        }


        function nextbtn2(){

                var s1=document.getElementById("slide");
                var s2=document.getElementById("slide-02");
                var s3=document.getElementById("slide-03");
        
                s2.style.display = "none";
                s1.style.display = "flex";
                }
                

                function nextbtn3(){

                  var s1=document.getElementById("slide");
                        var s2=document.getElementById("slide-02");
                        var s3=document.getElementById("slide-03");
                
                        s2.style.display = "none";
                        s3.style.display = "flex";
                        }

                        function nextbtn4(){

                          var s1=document.getElementById("slide");
                                var s2=document.getElementById("slide-02");
                                var s3=document.getElementById("slide-03");
                        
                                s3.style.display = "none";
                                s2.style.display = "flex";
                                }
/*slide animation  end*/