$(document).ready(function(){

  //media querys
  if (matchMedia) {
    var mediaQuery = window.matchMedia( "(max-width: 768px)" );
    mediaQuery.addListener(widthChange)
    widthChange.mediaQuery
  }

  if (mediaQuery.matches == true) {
    $("#nav-icon1").show()
    $(".nav-list li a").css("display", "none")
    $("h1").css({fontSize: "34px"})
    $("#nav-icon1").removeClass("open")
  }
  else{
    $("h1").css({fontSize: "50px"})
    $("#nav-icon1").hide()
    $(".nav-list li a").show()
  }

  function widthChange(mediaQuery) {
    if (mediaQuery.matches) {
      $("#nav-icon1").show()
      $(".nav-list li a").css("display", "none")
      $("h1").css({fontSize: "34px"})
      $("#nav-icon1").removeClass("open")
    }
    else {
      $("h1").css({fontSize: "50px"})
      $(".dropdown-content").hide()
      $("#nav-icon1").hide()
      $(".nav-list li a").show()
    }
  }

  //hamburger icon open
  $("#nav-icon1").click(function(){
    $(this).toggleClass("open")
    $(".dropdown-content").slideToggle("fast")
  })

  //nav-list height bounces on hover
  $(".nav-list li a").mouseenter(function(){
    $(this).stop().animate({marginTop: "-3px"}, 100)
  })
  .mouseleave(function() {
    $(this).stop().animate({marginTop: "0px"}, 10)
  })

  //highlight dropdown content
  $(".dropdown-content li").hover(function(){
    $(this).find("a").stop().css({color: "black"})
    $(this).stop().css({backgroundColor: "white"})
    $(this).stop().css({cursor: "pointer"})
  }, function() {
    $(this).find("a").css({color: "white"})
    $(this).stop().css({backgroundColor: "transparent"})
    $(this).stop().css({cursor: "pointer"})
  })

  //scrolling animation
  $(".dropdown-content li").click(function(e){
    var $anchor = $(this).find("a")
    var anchorHash = $anchor[0].hash
    $('html,body').animate({ scrollTop:$(anchorHash).offset().top }, 1000);
  })

  $(".scroll").click(function(event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop:$(this.hash).offset().top }, 1000);
  })




})//end of ready