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
