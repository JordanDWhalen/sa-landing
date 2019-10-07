$('.nav-global__trigger').click(function(e){
  e.preventDefault();

  $(this).toggleClass('nav-global__trigger--active')

  $('.header-global').toggleClass('header-global--active');

});

function navHeight(){
  var height = $('.hero').outerHeight();
  $(".nav-global__trigger").css("height", height);
}

$(window).on("load", function(){
  navHeight();
});

$(window).on("resize", function(){
  navHeight();
});

$('body').bind('focusin focus', function(e){
  e.preventDefault();
})

$('.news-accordion__trigger').on("click", function(e){
  e.preventDefault();
  $(this).parents('.news-accordion').toggleClass("news-accordion--open");
});

// Sliders
$('.hero__slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
  dotsClass: 'hero__slider-nav slider__nav',
  swipe: true,
  // autoplay: true,
  // autoplaySpeed: 2500,
  pauseOnDotsHover: true
});

$('.client-slider__wrapper').slick({
  arrows: true,
  appendArrows: '.client-slider',
  prevArrow: '<div class="slick-arrow slick-prev"></div>',
  nextArrow: '<div class="slick-arrow slick-next"></div>',
  dots: true,
  infinite: true,
  swipe: true,
  slidesToShow: 2,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Sliders
$('.news-accordion__slider').slick({
  arrows: true,
  dots: true,
  infinite: false,
  swipe: true
});

$('.logo-slider__wrapper').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 8,
  swipe: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

function ssSliderSet(){
  var active = $('.success-stories__nav-item--active');
      count = active.attr('data-item'),
      total = $('.success-stories__nav-item').length,
      height = $('.success-stories__slider-item#' +  count).outerHeight(),
      width = $(window).width();

  if( width <= 721 ){
    $('.success-stories__slider').css('height', height);
  } else{
    $('.success-stories__slider').css('height', '');
    $('.success-stories__container').css('min-height', height);
  }
}

$(window).on("load", function(){
  ssSliderSet();
});

$(window).on("resize", function(){
  ssSliderSet();
});

$('.success-stories__nav-item').on("click", function(e){
  e.preventDefault();

  var self = $(this),
      count = self.attr('data-item'),
      height = $('.success-stories__slider-item#' +  count).outerHeight(),
      total = $('.success-stories__nav-item').length,
      slide = $('.success-stories__slider-item#' +  count);

  $('.success-stories__nav-item--active').removeClass('success-stories__nav-item--active');
  $('.success-stories__slider-item--active').removeClass('success-stories__slider-item--active');

  if( $(window).width() < 721 ){
    $([document.documentElement, document.body]).animate({
          scrollTop: $(".success-stories__slider").offset().top
      }, 1250);
  }

  self.addClass('success-stories__nav-item--active');
  slide.addClass('success-stories__slider-item--active');

  ssSliderSet();

})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyIsIm1vYmlsZS1mb3Jtcy5qcyIsIm5ld3MtYWNjb3JkaW9uLmpzIiwic2xpZGVyLmpzIiwic21vb3RoLXNjcm9sbC5qcyIsInN1Y2Nlc3Mtc3Rvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcubmF2LWdsb2JhbF9fdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbmF2LWdsb2JhbF9fdHJpZ2dlci0tYWN0aXZlJylcblxuICAkKCcuaGVhZGVyLWdsb2JhbCcpLnRvZ2dsZUNsYXNzKCdoZWFkZXItZ2xvYmFsLS1hY3RpdmUnKTtcblxufSk7XG5cbmZ1bmN0aW9uIG5hdkhlaWdodCgpe1xuICB2YXIgaGVpZ2h0ID0gJCgnLmhlcm8nKS5vdXRlckhlaWdodCgpO1xuICAkKFwiLm5hdi1nbG9iYWxfX3RyaWdnZXJcIikuY3NzKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG59XG5cbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgbmF2SGVpZ2h0KCk7XG59KTtcblxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gIG5hdkhlaWdodCgpO1xufSk7XG4iLCIkKCdib2R5JykuYmluZCgnZm9jdXNpbiBmb2N1cycsIGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuIiwiJCgnLm5ld3MtYWNjb3JkaW9uX190cmlnZ2VyJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKHRoaXMpLnBhcmVudHMoJy5uZXdzLWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKFwibmV3cy1hY2NvcmRpb24tLW9wZW5cIik7XG59KTtcbiIsIi8vIFNsaWRlcnNcbiQoJy5oZXJvX19zbGlkZXInKS5zbGljayh7XG4gIGFycm93czogZmFsc2UsXG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgZG90c0NsYXNzOiAnaGVyb19fc2xpZGVyLW5hdiBzbGlkZXJfX25hdicsXG4gIHN3aXBlOiB0cnVlLFxuICAvLyBhdXRvcGxheTogdHJ1ZSxcbiAgLy8gYXV0b3BsYXlTcGVlZDogMjUwMCxcbiAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZVxufSk7XG5cbiQoJy5jbGllbnQtc2xpZGVyX193cmFwcGVyJykuc2xpY2soe1xuICBhcnJvd3M6IHRydWUsXG4gIGFwcGVuZEFycm93czogJy5jbGllbnQtc2xpZGVyJyxcbiAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLWFycm93IHNsaWNrLXByZXZcIj48L2Rpdj4nLFxuICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stYXJyb3cgc2xpY2stbmV4dFwiPjwvZGl2PicsXG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzd2lwZTogdHJ1ZSxcbiAgc2xpZGVzVG9TaG93OiAyLFxuICBkb3RzOiBmYWxzZSxcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pO1xuXG4vLyBTbGlkZXJzXG4kKCcubmV3cy1hY2NvcmRpb25fX3NsaWRlcicpLnNsaWNrKHtcbiAgYXJyb3dzOiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIHN3aXBlOiB0cnVlXG59KTtcblxuJCgnLmxvZ28tc2xpZGVyX193cmFwcGVyJykuc2xpY2soe1xuICBhcnJvd3M6IHRydWUsXG4gIGRvdHM6IGZhbHNlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgc2xpZGVzVG9TaG93OiA4LFxuICBzd2lwZTogdHJ1ZSxcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDZcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDg0MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogNFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICB9XG4gICAgfVxuICBdXG59KTtcbiIsIi8vIFNlbGVjdCBhbGwgbGlua3Mgd2l0aCBoYXNoZXNcbiQoJ2FbaHJlZio9XCIjXCJdJylcbiAgLy8gUmVtb3ZlIGxpbmtzIHRoYXQgZG9uJ3QgYWN0dWFsbHkgbGluayB0byBhbnl0aGluZ1xuICAubm90KCdbaHJlZj1cIiNcIl0nKVxuICAubm90KCdbaHJlZj1cIiMwXCJdJylcbiAgLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gT24tcGFnZSBsaW5rc1xuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSA9PVxuICAgICAgICB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJlxuICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxuICAgICkge1xuICAgICAgLy8gRmlndXJlIG91dCBlbGVtZW50IHRvIHNjcm9sbCB0b1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKFwiW25hbWU9XCIgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyBcIl1cIik7XG4gICAgICAvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDAsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAgIC8vIE11c3QgY2hhbmdlIGZvY3VzIVxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICBpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkge1xuICAgICAgICAgICAgICAvLyBDaGVja2luZyBpZiB0aGUgdGFyZ2V0IHdhcyBmb2N1c2VkXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICR0YXJnZXQuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIik7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxuICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuIiwiZnVuY3Rpb24gc3NTbGlkZXJTZXQoKXtcbiAgdmFyIGFjdGl2ZSA9ICQoJy5zdWNjZXNzLXN0b3JpZXNfX25hdi1pdGVtLS1hY3RpdmUnKTtcbiAgICAgIGNvdW50ID0gYWN0aXZlLmF0dHIoJ2RhdGEtaXRlbScpLFxuICAgICAgdG90YWwgPSAkKCcuc3VjY2Vzcy1zdG9yaWVzX19uYXYtaXRlbScpLmxlbmd0aCxcbiAgICAgIGhlaWdodCA9ICQoJy5zdWNjZXNzLXN0b3JpZXNfX3NsaWRlci1pdGVtIycgKyAgY291bnQpLm91dGVySGVpZ2h0KCksXG4gICAgICB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gIGlmKCB3aWR0aCA8PSA3MjEgKXtcbiAgICAkKCcuc3VjY2Vzcy1zdG9yaWVzX19zbGlkZXInKS5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH0gZWxzZXtcbiAgICAkKCcuc3VjY2Vzcy1zdG9yaWVzX19zbGlkZXInKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAkKCcuc3VjY2Vzcy1zdG9yaWVzX19jb250YWluZXInKS5jc3MoJ21pbi1oZWlnaHQnLCBoZWlnaHQpO1xuICB9XG59XG5cbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgc3NTbGlkZXJTZXQoKTtcbn0pO1xuXG4kKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgc3NTbGlkZXJTZXQoKTtcbn0pO1xuXG4kKCcuc3VjY2Vzcy1zdG9yaWVzX19uYXYtaXRlbScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgc2VsZiA9ICQodGhpcyksXG4gICAgICBjb3VudCA9IHNlbGYuYXR0cignZGF0YS1pdGVtJyksXG4gICAgICBoZWlnaHQgPSAkKCcuc3VjY2Vzcy1zdG9yaWVzX19zbGlkZXItaXRlbSMnICsgIGNvdW50KS5vdXRlckhlaWdodCgpLFxuICAgICAgdG90YWwgPSAkKCcuc3VjY2Vzcy1zdG9yaWVzX19uYXYtaXRlbScpLmxlbmd0aCxcbiAgICAgIHNsaWRlID0gJCgnLnN1Y2Nlc3Mtc3Rvcmllc19fc2xpZGVyLWl0ZW0jJyArICBjb3VudCk7XG5cbiAgJCgnLnN1Y2Nlc3Mtc3Rvcmllc19fbmF2LWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdzdWNjZXNzLXN0b3JpZXNfX25hdi1pdGVtLS1hY3RpdmUnKTtcbiAgJCgnLnN1Y2Nlc3Mtc3Rvcmllc19fc2xpZGVyLWl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdzdWNjZXNzLXN0b3JpZXNfX3NsaWRlci1pdGVtLS1hY3RpdmUnKTtcblxuICBpZiggJCh3aW5kb3cpLndpZHRoKCkgPCA3MjEgKXtcbiAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuc3VjY2Vzcy1zdG9yaWVzX19zbGlkZXJcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMjUwKTtcbiAgfVxuXG4gIHNlbGYuYWRkQ2xhc3MoJ3N1Y2Nlc3Mtc3Rvcmllc19fbmF2LWl0ZW0tLWFjdGl2ZScpO1xuICBzbGlkZS5hZGRDbGFzcygnc3VjY2Vzcy1zdG9yaWVzX19zbGlkZXItaXRlbS0tYWN0aXZlJyk7XG5cbiAgc3NTbGlkZXJTZXQoKTtcblxufSlcbiJdfQ==
