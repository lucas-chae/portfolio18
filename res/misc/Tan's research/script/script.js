
$('a[href^="#"]').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


window.onscroll = function() {myFunction1()};
var navbar1 = document.getElementById("navigation");
var splash1 = document.getElementById("second-splash");
var sticky1 = navbar1.offsetTop;

function myFunction1() {
  if (window.pageYOffset >= sticky1) {
    navbar1.classList.add("sticky");
    splash1.classList.add("movedown");
  } else {
    navbar1.classList.remove("sticky");
    splash1.classList.remove('movedown');
   
  }
}


/*
window.onscroll = function() {myFunction2()};
var navbar = document.getElementById("navigation");
var splash = document.getElementById("project");
var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    splash.classList.add("movedown");
  } else {
    navbar.classList.remove("sticky");
    splash.classList.remove('movedown');
   
  }
}*/


function dropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

{
            window.addEventListener("scroll", Animation);
            function Animation()
            {
                $(".second-title:visible").addClass("agent-1");
                $(".research-description:visible").addClass("agent-2");
                $("#chart").addClass("agent-2");
            }
        }


$('#js-flip-1').toggle(
    function() {
        $('#js-flip-1 .card').addClass('flipped');
    },
    function() { $('#js-flip-1 .card').removeClass('flipped');
    }
);