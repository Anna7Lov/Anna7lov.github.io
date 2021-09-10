$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.overlay-wrapper').addClass('active-nav');
    $('.nav-wrapper').addClass('active-nav');
  });
  $('.close-nav').click(function () {
    $('.overlay-wrapper').removeClass('active-nav');
    $('.nav-wrapper').removeClass('active-nav');
  });
  $('.overlay').click(function () {
    $('.overlay-wrapper').removeClass('active-nav');
    $('.nav-wrapper').removeClass('active-nav');
  });

  $(function () {
    tabInit();
  });

  function tabInit() {
    $('.vertical-tabs').delegate('li:not(.chosen)', 'click', function () {
      $(this).addClass('chosen').siblings().removeClass('chosen')
        .parents('.wrap-vertical-tabs').find('.vertical-tabs-content')
        .hide().eq($(this).index()).fadeIn(170);
    });

  }

  $('.grid').masonry({
    // options
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 39
  });
  $('.advantages-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.achievements-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  (function ($) {
    jQuery.fn.lightTabs = function (options) {

      var createTabs = function () {
        tabs = this;
        i = 0;

        showPage = function (i) {
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
        };

        showPage(0);

        $(tabs).children("ul").children("li").each(function (index, element) {
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).children("ul").children("li").click(function () {
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(document).ready(function () {
    $(".tabs").lightTabs();
  });
});




