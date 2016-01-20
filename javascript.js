$(document).ready(function(){

  $(".dropbutton").on("click", function(){
    $(".dropdown-content").toggle(200, function(){
  })
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

  $(".dropbutton").on("click", function(){
    $(this).toggleClass("active")
    return false
  })

  var width = 350
  var animateSpeed = 1000
  var pause = 5000
  var currentSlide = 1

  //cache DOM
  var $slider = $("#slider")
  var $slideContainer = $slider.find(".slides")
  var $slides = $slideContainer.find(".slide")

  var interval

  function startSlider() {
    $slides.find("img").css("opacity", 0.6)
    interval = setInterval(function() {
      var obj = {"margin-left": "-="+width}
      $("#slider .slides").animate(obj, animateSpeed, function(){
        currentSlide ++
        if (currentSlide == $slides.length) {
          currentSlide = 1
          $slideContainer.css("margin-left", 0)
        }
      })

    }, pause)
  }

  function pauseSlider() {
    clearInterval(interval)
    var $img = $slides.find("img")
    $img.css("opacity", 1)
  }

  $slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider)
  startSlider()









})//end of ready




