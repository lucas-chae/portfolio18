$(function() {
    if ($(window).width() >= 769) {
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
       
       console.log("viewWidth is " + -4.0 * viewWidth);
       console.log("menuTrigger left is" + menuTrigger.left);
       

       if (-0.5 * viewWidth < menuTrigger.left && menuTrigger.left <= 0) {
        $("#list-portfolio").removeClass("effective");
        $("#list-portfolio").removeClass("ineffective");
        $("#list-about").removeClass("effective");
        $("#list-about").removeClass("ineffective");
        $("#list-contact").removeClass("effective");
        $("#list-contact").removeClass("ineffective");
        $("#design").addClass("displayNone");
       
       }
       else if (-6.0 * viewWidth < menuTrigger.left && menuTrigger.left  <= -0.5 * viewWidth) {
        $("#list-portfolio").addClass("effective");
        $("#list-portfolio").removeClass("ineffective");
        $("#list-about").addClass("ineffective");
        $("#list-about").removeClass("effective");
        $("#list-contact").addClass("ineffective");
        $("#list-contact").removeClass("effective");
        $("#design").removeClass("displayNone");
        $("#misctile").addClass("displayNone");
        $("#moreme").addClass("displayNone");
       
       }
       else if (-6.8 * viewWidth < menuTrigger.left && menuTrigger.left <= -6.0 * viewWidth) {
        $("#list-portfolio").addClass("ineffective");
        $("#list-portfolio").removeClass("effective");
        $("#list-about").addClass("effective");
        $("#list-about").removeClass("ineffective");
        $("#list-contact").addClass("ineffective");
        $("#list-contact").removeClass("effective");
        $("#design").addClass("displayNone");
        $("#misctile").removeClass("displayNone");
        $("#moreme").addClass("displayNone");
       
       }
       else {
        $("#list-portfolio").addClass("ineffective");
        $("#list-portfolio").removeClass("effective");
        $("#list-about").addClass("ineffective");
        $("#list-about").removeClass("effective");
        $("#list-contact").addClass("effective");
        $("#list-contact").removeClass("ineffective");
        $("#design").addClass("displayNone");
        $("#misctile").addClass("displayNone");
        $("#moreme").removeClass("displayNone");
        //$('#modal-portfolio').css("display", "block");
        
        //$(".square").css({left: -1 * menuTrigger.left+'px'});

       }


       
    });
 });


/*
 $(function() {
  $(window).scroll(function () {
    var menuTrigger = $("#scroll-container").offset();
    var viewWidth = $(window).width();
      if (-4.0 * viewWidth >= menuTrigger.left) {
        $('#modal-portfolio').css("display", "block");

      }
    })
  });


 $(function($) {
  $('#modal-portfolio').on('scroll', function() {
      if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $('#modal-portfolio').css("display", "none");
      }
  })
});

*/

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

$(function () {
  $(document).ready(function () {
    $('.myBtn').click(function (e) {
      var buttonid = $(this).attr('id');
      buttonid += "-content"
      var modal = $('#' + buttonid)[0];
      $('#' + buttonid).css("display", "block");
      $('.close').click(function (e) {
        $('#' + buttonid).css("display", "none");
      });

      // Press esc to close modal
      $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
          $('#' + buttonid).css("display", "none");
        }
      });
      // Click outside of modal box to close modal
      window.onclick = function (e) {
        if (e.target == modal) {
          $('#' + buttonid).css("display", "none");
        }
      }

    });

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


