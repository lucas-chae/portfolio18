$(function() {
    if ($(window).width() >= 768) {
        var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
           //height: 10050, 
                            // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
               
            }

        });
      }
        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    });



    $(function() {
      $(window).scroll(function () {
       
         var horCheck = $("#scroll-container").offset();
         if (horCheck.left < -200) {
          $("body").addClass("change-color");
         }
         else {
          $("body").removeClass("change-color");
         }
      });
   });

   $(function() {
    $(window).scroll(function () {
     
       var menuTrigger = $("#scroll-container").offset();
       var viewWidth = $(window).width();
       console.log("menuTrigger is" + menuTrigger.left);
       console.log("viewWidth is" + viewWidth);
       if (menuTrigger.left <= -0.8 * viewWidth) {
        $("#list-portfolio").addClass("effective");
        $("#list-about").addClass("ineffective");
        $("#list-contact").addClass("ineffective");
        $("#design").removeClass("displayNone");
       }
       else {
        $("#list-portfolio").removeClass("effective");
        $("#list-about").removeClass("ineffective");
        $("#list-contact").removeClass("ineffective");
        $("#design").addClass("displayNone");
       }

       
    });
 });



   $(function() {
    $(window).scroll(function () {

      if ($(window).width() <= 768) {
      if ($(this).scrollTop() >50  ) {
       $("body").addClass("change-color");
       $("nav").addClass("change-color-nav");
      }
      else {
       $("body").removeClass("change-color");
       $("nav").removeClass("change-color-nav");
       
      }
    }

      if ($(window).width() <= 768) {

      if ($(this).scrollTop() > 150) {
        $("#title").addClass("displayUp");
      }
      else {
        $("#title").removeClass("displayUp");
      }
    }

   });
    $(window).resize(function() {
      if ($(window).width() >= 768) {
        elem.destroy();
      }
      else {
        elem.reinitialize();
      }
    });
});


/*
$(function() {
   $(document).ready(function () {
     $("button").click(function() {
      var horCheck = $("#scroll-container").offset();
      alert(" Left: " + horCheck.left);
     });
     
      
   });
});
*/


