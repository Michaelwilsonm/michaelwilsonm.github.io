$(document).ready(function(){

  $(".thumbnail").hover(function(){
    $img = $(this).find('img')
    $one = $(this).hasClass("one")
    $two = $(this).hasClass("two")
    $three = $(this).hasClass("three")
    if ($one) {
      $img.stop().animate({
        width: "250px",
        height: "150px",
        position: "fixed"
      }, 300)
    }else if ($two) {
      $img.stop().animate({
        width: "265px",
        height: "160px"
      }, 300)
    }else{ $three
      $img.stop().animate({
        width: "250px",
        height: "160px"
      }, 300)
    }
  },function(){
    $(this).stop().find("img").animate({width: "200", height: "132"})
  });






})//end of ready