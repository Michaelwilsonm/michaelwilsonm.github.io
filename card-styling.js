$(document).ready(function(){

  $(".thumbnail").hover(function(){
    $img = $(this).find('img')
    if ($(this).hasClass("one")) {
      $img.animate({
        width: "250px",
        height: "150px"
      }, 1000)
    }else if ($(this).hasClass("two")) {
      $img.animate({
        width: "265px",
        height: "160px"
      }, 1000)
    }else{ $(this).hasClass("three")
      $img.animate({
        width: "250px",
        height: "160px"
      }, 1000)
    }
  },function(){
    console.log($(this))
  });






})//end of ready