$(document).ready(function(){

  $(window).scroll(function() {
    var pos = $(window).scrollTop();
    if (pos > 850){
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