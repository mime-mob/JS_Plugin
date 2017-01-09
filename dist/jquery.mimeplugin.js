;(function($) {
  var long = 0;
  var LONG = 0;
  var wrapperWidth = 0;
  var li_n = 1;
  var $ul = null;
  var $li = null;
  var liStr = '';
  $.fn.extend({
    infiniteSlide: function() {
      $ul = $(this).find("ul");
      $li = $ul.find("li:first");
      long = $li.find("span").width() * $li.find("span").length;
      liStr = $li[0].outerHTML;

      function _init() {
        $ul.empty();
        $ul.append(liStr);
        wrapperWidth = $(this).width();
        li_n = ~~(wrapperWidth / long);
        LONG = (li_n + 2) * long;

        $ul.css({
          'width': LONG + 'px',
          'left': wrapperWidth - LONG + long + 'px'
        });

        $ul.prepend(liStr);
        for (var i = 0; i < li_n; i++) {
          $ul.append(liStr);
        }

        _move();
      }

      function _resetEl() {
        $ul.css({
          'left': wrapperWidth - LONG + long + 'px'
        });
        _move();
      }

      function _move() {
        $ul.animate({
          left: wrapperWidth - LONG  + 'px'
        }, 10000, "linear", _resetEl);
      }

      $(window).resize(function() {
        $ul.stop();
        _init();
      });

      _init();
    }
  })
})(jQuery);

;(function($) {
  var _default = {
    colorInner: "#ffc600",
    colorMiddle: "#ffe178",
    colorOut: "#faedbf",
    colorBook: "#ffffff"
  };
  $.extend({
    showMimeLoading: function(config) {
      if ($("#mimeloading-cus").length > 0) {
        return;
      }

      $.extend(_default, config);

      $('body').append(
        '<style data-name="style">.mimeloading .mml-badge {background:' + _default.colorInner + '}' +
        '.mimeloading .mml-badge-cycle {border-color:' + _default.colorMiddle + '}' +
        '.mimeloading .mml-book {background:' + _default.colorBook + '}' +
        '.mimeloading .mml-book:before {background:' + _default.colorInner + '}' +
        '.mimeloading .mml-book:after {background:' + _default.colorBook + '}' +
        '.mimeloading .mml-book span {background:' + _default.colorBook + '}' +
        '.mimeloading .mml-book span:before {background:' + _default.colorInner + '}' +
        '.mimeloading .mml-book span:after {background:' + _default.colorInner + '}' +
        '.mimeloading .mml-cycle {border-color:' + _default.colorOut + '}' +
        '.mimeloading .mml-cycle-s8 span:before {border-color:' + _default.colorOut + '}' +
        '.mimeloading .mml-cycle-s8 span:after {border-color:' + _default.colorOut + '}' +
        '.mimeloading .mml-cycle-s4 span:before {border-color:' + _default.colorOut + '}' +
        '.mimeloading .mml-cycle-s4 span:after {border-color:' + _default.colorOut + '}</style>'
      );

      $('body').append(
        '<div id="mimeloading-cus" class="mimeloading starting">' +
        '<div class="mml-mask"></div><div class="mml-wrap">' +
        '<div class="mml-book"><span></span></div>' +
        '<div class="mml-badge-cycle"></div>' +
        '<div class="mml-badge"></div></div><div class="mml-cycle-wrap">' +
        '<div class="mml-cycle-s4"><span></span><span></span></div>' +
        '<div class="mml-cycle-s8"><span></span><span></span>' +
        '<span></span><span></span></div><div class="mml-cycle"></div></div>'
      );
    },
    hideMimeLoading: function () {
      if ($("#mimeloading-cus").length < 0 || $("style[data-name='style']").length < 0) {
        return;
      }

      $("#mimeloading-cus").removeClass("starting").addClass("ending");
      setTimeout(function() {
        $("#mimeloading-cus").remove();
        $("style[data-name='style']").remove();
      }, 1000);
    }
  });
})(jQuery);
