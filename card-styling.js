
function fullWidthCards() {
  $(window).scroll(function() {
    var pos = ($("#projects")[0].offsetTop - 500)
    var quotePos = ($("#quote-hide")[0].offsetTop - 400)
    var windowPos = $(window).scrollTop();

    if (windowPos > pos){
      $(".thumbnail").animate({
        "opacity": "1",
        "left": "0"
      }, 1000)
      $(".code").fadeIn(2000)
    }
    if (windowPos > quotePos){
      $(".quote").animate({
        "opacity": "1",
      }, 800)
    }
  })
}

function halfWidthCards(one, two, three, quote){
  $(window).scroll(function() {
    var pos = ($("#projects-0")[0].offsetTop - 400)
    var pos1 = ($("#projects-1")[0].offsetTop - 400)
    var pos2 = ($("#projects-2")[0].offsetTop - 400)
    var pos3 = ($("#quote-hide")[0].offsetTop - 400)
    var windowPos = $(window).scrollTop();

    if (windowPos > pos) {
      one.animate(stylesAnimate(), 500)
    }
    if (windowPos > pos1) {
      three.animate(stylesAnimate(), 1200)
    }
    if (windowPos > pos2) {
      two.animate(stylesAnimate(), 500)
    }
    if (windowPos > pos3) {
      quote.animate(stylesAnimate(), 700)
    }
  })
}

function stylesAnimate(){
  return {"opacity": "1", "left": "0"}
}
