// code for dropdown start

function f1(){
    var x = document.getElementById("dropdown");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

      document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('dropdown');
        if (!container.contains(e.target)) {
            container.style.display = 'none';
        }
      })

// code for dropdown end


// code for pop up start

function popupwe(){
  document.getElementById("popupbox").style.display = "none";
  
}