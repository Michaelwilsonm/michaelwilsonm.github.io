$(document).ready(function(){


  $(window).scroll(function() {
    var pos = ($("#projects")[0].offsetTop - 450)
    var windowPos = $(window).scrollTop();

    if (windowPos > pos ){
      $(".two>img").animate({
        "left": "0",
        "opacity": "1"
      }, 800)
      $(".one>img").animate({
        "left": "0",
        "opacity": "1"
      }, 800)
      $(".code").fadeIn(800)
    }
  })

})//end of ready