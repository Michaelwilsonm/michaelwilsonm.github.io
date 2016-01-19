$(document).ready(function(){

  $(".dropbutton").on("click", function(){
    $(".dropdown-content").toggle(500)
  })

  if (matchMedia) {
    var mediaQuery = window.matchMedia( "(max-width: 750px)" );
    mediaQuery.addListener(widthChange)
    widthChange.mediaQuery
  }
  if (mediaQuery.matches == true) {
    $(".dropbutton").show()
    $(".nav-list li a").css("display", "none")
  }
  else{
    $(".dropbutton").hide()
    $(".nav-list li a").show()
  }

  function widthChange(mediaQuery) {
    if (mediaQuery.matches) {
      $(".dropbutton").show()
      $(".nav-list li a").css("display", "none")
    }
    else {
      $(".dropdown-content").hide()
      $(".dropbutton").hide()
      $(".nav-list li a").show()
    }
  }

})//end of ready