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
  var pause = 4000
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

  function issData(){
    $.ajax({
      method: "GET",
      url: "http://api.open-notify.org/iss-now.json",
      dataType: 'jsonp',
      success: latLng
    })
  }

  function latLng(data){
    var lat = data.iss_position.latitude
    var lng = data.iss_position.longitude

    console.log("lat : " + lng, "longitude : " + lng)
  }

  "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY"

issData()





})//end of ready




