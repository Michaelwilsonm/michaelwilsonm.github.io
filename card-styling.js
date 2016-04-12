
function fullWidthCards() {
  $(window).scroll(function() {
    var pos = ($("#projects")[0].offsetTop - 450)
    var windowPos = $(window).scrollTop();

    if (windowPos > pos ){
      $(".two>img").animate({
        "display": "block",
        "left": "0",
        "opacity": "1"
      }, 800)
      $(".one>img").animate({
        "left": "0",
        "opacity": "1"
      }, 800)
      $(".code").fadeIn(1500)
    }
  })
}

function halfWidthCards(){
  $(window).scroll(function() {
    var pos = ($("#projects-0")[0].offsetTop - 300)
    var pos1 = ($("#projects-1")[0].offsetTop - 300)
    var pos2 = ($("#projects-2")[0].offsetTop - 300)
    var windowPos = $(window).scrollTop();
    console.log(pos2)
    console.log(windowPos)

    if (windowPos > pos) {
      $(".one>img").animate({
        "left": "0",
        "opacity": "1"
      }, 800)
    }
    if (windowPos > pos1) {
      $(".code").fadeIn(1500)
    }
    if (windowPos > pos2) {
      $(".two>img").animate({
        "left": "0",
        "opacity": "1"
      }, 800)
    }
  })
}

