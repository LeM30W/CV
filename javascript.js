var d = document;
var slider = d.getElementsByClassName("slider");
var i;

// ouverture des div.data

for (i = 0; i < slider.length; i++) {
    slider[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("open");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// Boutton d'ouverture et de fermeture de la NAV
var open = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    d.getElementById("mySidenav").style.width = "250px";
    d.getElementById("main").style.marginLeft = "250px";
    open = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    d.getElementById("mySidenav").style.width = "0";
    d.getElementById("main").style.marginLeft = "0";
    open = false;
}

function toggleNav() {
  if(open == true){
    closeNav();
    open = false;
  } else {
    openNav();
    open = true;
  }
}
//Fin de la Nav
