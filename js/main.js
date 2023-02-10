/*VIDEO WALL*/
$('#videoWall').infiniteScroller({
  maxSpeed: 3,
  speed: 1,
  resetOnMouseOut: false
});

$(document).ready(function() {
  $(".megamenu").on("click", function(e) {
    e.stopPropagation();
  });
});

$('.navFirst li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(50);
  $(this).addClass("hover");
  }, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(50);
  $(this).removeClass("hover");
});

$(document).ready(function () { 
  if($(window).width() > 992){
    // var fadeOut = function() {
    //   $('.videoOverlay').fadeOut('slow');
    //   $('.videoDesc').fadeIn('slow');
    // }
    // setTimeout(fadeOut, 4500);

    // var fadeIn = function() {
    //   $('.videoDesc').fadeIn('slow');
    // }
    // setTimeout(fadeIn, 4800);

    // $('.explore').click(function() {
    //   fadeOut();
    // });

    function mouseMove() {     
      $(".videoWrapper").mousemove(function(e){
        var pHeight = $(this).innerHeight();
        var pOffset = $(this).offset(); 
        var y = e.pageY - pOffset.left;
        
        if(pHeight/2 > y) {
          $('#videoWall ul').animate({
            'top': 80 + 'px'
          }, 0, 'linear');
        }else{
          if($(window).height() > 1080){
            $('#videoWall ul').animate({
              'top': -60 + 'px'
            }, 0, 'linear');
          } else if ($(window).height() > 950){
            $('#videoWall ul').animate({
              'top': -150 + 'px'
            }, 0, 'linear');
          } else {
            $('#videoWall ul').animate({
              'top': -190 + 'px'
            }, 0, 'linear');
          }
        }
      });
    }

    setTimeout(mouseMove, 1000);

  }
});
/*END VIDEO WALL*/

function onSubmit() {
  $('.js-contact-form').submit();
}

function onSubmitApplication() {
  $('.js-contact-form-application').submit();
}

function onSubmitGeneral() {
  $('.js-contact-form-general').submit();
}

function onSubmitTicket() {
  $('.js-contact-form-ticket').submit();
}

function onSubmitOffice() {
  $('.js-office-form').submit();
}

function onSubmitSubscribe() {
  $('.js-subscriber-form').submit();
}




/*SCROLL*/
$(document).on('click', '.scrollTo', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

/*SEARCH*/
$(document).ready(function () { 
  $(".search-toggle-link").click(function() {
    $(".searchWrapper").toggle();

    $("#gsc-i-id1").attr("placeholder", "Where can we take you?");
    $(".gsc-search-button-v2").text("Search");
  });

  $('.mobileNavModal').on('shown.bs.modal', function (e) {
    $("#gsc-i-id2").attr("placeholder", "Search");
    $(".gsc-search-button-v2").text(">");
  });
});


/*SLIDERS*/
$('.homeGallery').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: false,
  dots: true,
  // fade: true,
  // cssEase: 'linear',
  autoplaySpeed: 9000,
  speed: 1200,
  lazyLoad: 'ondemand',
  pauseOnFocus: false,
  pauseOnHover: false
});

$('.testimonialsSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true
});

$('.caseStudySlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});

$('.full-blockSlider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.blockSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});

$('.videoSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.moreSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$('.moreSlider-two').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.partnersSlider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 4,
        centerMode: true
      }
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.smSlider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.accredsSlider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        centerMode: false
      }
    }
  ]
});

$('.highlightsSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 890,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

/*POPOVER VIDEOS*/
$(document).ready(function() {
  $(".popover-video").magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
  });
});

/*FORM REVEAL*/
$('.collapse-btn').click(function(e){    
  $(".collapse-btn").animate({ opacity: 0 })
});

if(window.location.hash === '#success') {
  $('.collapse-btn').addClass('invisible');
} else {
  
}

if(window.location.hash === '#mailingListSuccess') {
  $('.mailingList').addClass('d-none');
  $(".js-subscriber-form").trigger("reset");
} else {
  
}

if(window.location.hash === '#letsTalkError') {
  $('.collapse-btn').addClass('invisible');
  $('#letsTalk').addClass('show');

  var scrollToElement = $("#letsTalkError");
  $(window).scrollTop( scrollToElement.offset().top);
} else {

}

/*BLOCK XS*/
if ($(window).width() < 767){
  $(".collapseBlockLink").click(function() {
    $("a.block-anchor").removeAttr('href');

    $(this).find(".blockLink-overlay").slideToggle();

    $(this).toggleClass('open');
    $(this).siblings().removeClass('open');
  });
}