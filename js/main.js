$(function(){

  $(".loader").delay(1500).fadeOut("slow");

  /* Бергер МЕНЮ*/
  $("#nav_toggle").on("click touchstart", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");

    $("#nav").toggleClass("active");
    return false;
  });




  /* Modal
=====================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');
    
  });


  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    setTimeout(function () {
      modalParent.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 100);
  });


  $(".modal").on("click", function (event) {
    let $this = $(this);

    setTimeout(function () {
      $this.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 100);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });



  /* РАЗВЕРНУТЬ СООБЕЩНИЯ  -- INBOX*/
  $(".inbox-card").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $('.inbox__title').removeClass("inbox__title-on").addClass("inbox__title-off");
    $('.nav__li').removeClass("inbox");
  });

  //  ПОКАЗАТЬ СТАТИСТИКУ -- STAT
  $(".stat-img").on("click", function (event) {
    event.preventDefault();
    $(".stat-img").removeClass("active");
    $(this).toggleClass("active");
  });

  //  ПОКАЗАТЬ СТАТИСТИКУ -- STAT
  $(".calendar__item").on("click", function (event) {
    event.preventDefault();
    $(".calendar__item").removeClass("active");
    $(this).toggleClass("active");
  });


  //  ИЗМЕНЯЕМ ДАНЫНЕ (калории, время)
  $(".stat-img--one").on("click", function (event) {
    $(".hours__time").text("1:48");
    $(".calori__time").text("70,2");
    $(".stat__circle-left").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 19%, #ebeff4 19%)' });
    $(".stat__circle-right").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 20%, #ebeff4 20%)' });

    
  });

  $(".stat-img--two").on("click", function (event) {
    $(".hours__time").text("2:56");
    $(".calori__time").text("80,09");
    $(".stat__circle-left").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 80%, #ebeff4 75%)' });
    $(".stat__circle-right").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 30%, #ebeff4 27%)' });
  });

  $(".stat-img--three").on("click", function (event) {
    $(".hours__time").text("1:36");
    $(".calori__time").text("67,11");
    $(".stat__circle-left").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 14%, #ebeff4 14%)' });
    $(".stat__circle-right").css({ background: 'linear-gradient(to right, #e35f5a 5%, #f1bb90 19%, #ebeff4 15%)' });
  });

  $(".av").on("click", function () {
    $(".bar").addClass("black");
  });
  $(".modal__close").on("click", function () {
    $(".bar").removeClass("black");
  });

  var app = {
    settings: {
      container: $('.calendar'),
      calendar: $('.front'),
      days: $('.weeks span'),
      form: $('.back'),
      input: $('.back input'),
      buttons: $('.back button')
    },

    init: function () {
      instance = this;
      settings = this.settings;
      this.bindUIActions();
    },

    swap: function (currentSide, desiredSide) {
      settings.container.toggleClass('flip');

      currentSide.fadeOut(900);
      currentSide.hide();

      desiredSide.show();
    },

    bindUIActions: function () {
      settings.days.on('click', function () {
        instance.swap(settings.calendar, settings.form);
        settings.input.focus();
      });

      settings.buttons.on('click', function () {
        instance.swap(settings.form, settings.calendar);
      });
    }
  }

  app.init();

});