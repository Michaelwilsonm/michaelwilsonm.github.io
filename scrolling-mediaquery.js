$(document).ready(function(){

  //media querys
  if (matchMedia) {
    var mobileQuery = window.matchMedia( "(max-device-width: 480px)" )
    console.log(mobileQuery)
    var mediaQuery = window.matchMedia( "(max-width: 768px)" );
    console.log(mediaQuery)
    mediaQuery.addListener(widthChange)
    widthChange.mediaQuery
    widthChange.mobileQuery
  }

  if (mediaQuery.matches == true || mobileQuery.matches == true) {
    $("#nav-icon1").show()
    $(".nav-list li a").css("display", "none")
    $("#nav-icon1").removeClass("open")
  }
  else{
    $("#nav-icon1").hide()
    $(".nav-list li a").show()
  }

  function widthChange(query) {
    console.log(query)
    if (query.matches) {
      $("#nav-icon1").show()
      $(".nav-list li a").css("display", "none")
      $("#nav-icon1").removeClass("open")
    }
    else {
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
    $(this).find("a").stop().css({color: "#999"})
    $(this).stop().css({backgroundColor: "white"})
    $(this).stop().css({cursor: "pointer"})
  }, function() {
    $(this).find("a").css({color: "white"})
    $(this).stop().css({backgroundColor: "transparent"})
    $(this).stop().css({cursor: "pointer"})
  })

  $(".fa.fa-chevron-down.fa-4x").mouseenter(function(){
  $(this).stop().animate({marginTop: "-3px"}, 100)
  })
  .mouseleave(function() {
    $(this).stop().animate({marginTop: "0px"}, 10)
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

  $(".fa.fa-chevron-down.fa-4x").click(function(event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop:$(this.hash).offset().top }, 1000);
  })

  $(".scroll").click(function(event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop:$(this.hash).offset().top }, 1000);
  })
})