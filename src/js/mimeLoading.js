;(function (window, document) {
  var colors = {
    colorInner: "#ffc600",
    colorMiddle: "#ffe178",
    colorOut: "#faedbf",
    colorBook: "#ffffff"
  };
  var mimeLoading = window.mimeLoading || {};

  mimeLoading.setColors = function (_colors) {
    if (!!_colors) {
      colors.colorInner = _colors.colorInner || colors.colorInner;
      colors.colorMiddle = _colors.colorMiddle || colors.colorMiddle;
      colors.colorOut = _colors.colorOut || colors.colorOut;
      colors.colorBook = _colors.colorBook || colors.colorBook;
    }

    return mimeLoading;
  }
  mimeLoading.show = function () {
    if (!!document.querySelector("#mimeloading-cus")) {
      return;
    }
    var $innerNode = document.createElement("DIV");
    var $innerCss = document.createElement("STYLE");
    $innerNode.setAttribute("id","mimeloading-cus");
    $innerNode.className = "mimeloading starting";
    $innerNode.innerHTML = '<div class="mml-mask"></div><div class="mml-wrap">' +
      '<div class="mml-book"><span></span></div>' +
      '<div class="mml-badge-cycle"></div>' +
      '<div class="mml-badge"></div></div><div class="mml-cycle-wrap">' +
      '<div class="mml-cycle-s4"><span></span><span></span></div>' +
      '<div class="mml-cycle-s8"><span></span><span></span>' +
      '<span></span><span></span></div><div class="mml-cycle"></div></div>';

    $innerCss.setAttribute("data-name","style");
    $innerCss.innerHTML = '.mimeloading .mml-badge {background:' + colors.colorInner + '}' +
      '.mimeloading .mml-badge-cycle {border-color:' + colors.colorMiddle + '}' +
      '.mimeloading .mml-book {background:' + colors.colorBook + '}' +
      '.mimeloading .mml-book:before {background:' + colors.colorInner + '}' +
      '.mimeloading .mml-book:after {background:' + colors.colorBook + '}' +
      '.mimeloading .mml-book span {background:' + colors.colorBook + '}' +
      '.mimeloading .mml-book span:before {background:' + colors.colorInner + '}' +
      '.mimeloading .mml-book span:after {background:' + colors.colorInner + '}' +
      '.mimeloading .mml-cycle {border-color:' + colors.colorOut + '}' +
      '.mimeloading .mml-cycle-s8 span:before {border-color:' + colors.colorOut + '}' +
      '.mimeloading .mml-cycle-s8 span:after {border-color:' + colors.colorOut + '}' +
      '.mimeloading .mml-cycle-s4 span:before {border-color:' + colors.colorOut + '}' +
      '.mimeloading .mml-cycle-s4 span:after {border-color:' + colors.colorOut + '}';

    document.querySelector('body').appendChild($innerCss);
    document.querySelector('body').appendChild($innerNode);
  };

  mimeLoading.hide = function () {
    var $mimeLoading = document.querySelector("#mimeloading-cus");
    var $styleNode = document.querySelector("style[data-name='style']");

    if (!$mimeLoading || !$styleNode) {
      return;
    }

    $mimeLoading.className = "mimeloading ending";
    setTimeout(function() {
      $mimeLoading.parentNode.removeChild($mimeLoading);
      $styleNode.parentNode.removeChild($styleNode);
    }, 1000);
  };

  window.mimeLoading = mimeLoading;
})(window, document);
