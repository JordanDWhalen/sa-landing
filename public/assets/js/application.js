
$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
      content = $(".hero").outerHeight() - $(".header-global").height();

  if (scroll > content){
    $('.header-global').addClass("header-global--scrolled");
  } else {
    $('.header-global').removeClass("header-global--scrolled");
  }

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgY29udGVudCA9ICQoXCIuaGVyb1wiKS5vdXRlckhlaWdodCgpIC0gJChcIi5oZWFkZXItZ2xvYmFsXCIpLmhlaWdodCgpO1xuXG4gIGlmIChzY3JvbGwgPiBjb250ZW50KXtcbiAgICAkKCcuaGVhZGVyLWdsb2JhbCcpLmFkZENsYXNzKFwiaGVhZGVyLWdsb2JhbC0tc2Nyb2xsZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgJCgnLmhlYWRlci1nbG9iYWwnKS5yZW1vdmVDbGFzcyhcImhlYWRlci1nbG9iYWwtLXNjcm9sbGVkXCIpO1xuICB9XG5cbn0pO1xuIl19
