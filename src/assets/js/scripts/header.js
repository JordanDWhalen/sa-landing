
$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
      content = $(".hero").outerHeight() - $(".header-global").height();

  if (scroll > content){
    $('.header-global').addClass("header-global--scrolled");
  } else {
    $('.header-global').removeClass("header-global--scrolled");
  }

});
