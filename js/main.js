"use strict";
$(".service .item").on({
	mouseenter: function() {
	$(this).find("img").animate({//hide
    height: "hide"
  }, 250, function() {
    // Animation complete.
  });
	$(this).find(".hide").animate({//show
    height: "show"
  }, 250, function() {
    // Animation complete.
  });  
}, mouseleave: function(){
	$(this).find("img").animate({//show
    height: "show"
  }, 250, function() {
    // Animation complete.
  });
	$(this).find(".hide").animate({
    height: "hide"
  }, 250, function() {
    // Animation complete.
  });
}});

$(document).ready(function() {
   $("a.order").click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 500 );
     return false;
   });
   $("a.down").click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 500 );
     return false;
   });
 });