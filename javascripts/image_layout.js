$(document).ready(function() {
  function fixFloatedImages() {
    $(".post_image.float_right").each(function() {
      var $img = $(this),
    $p = $img.next('p'),
    $prev_elem = $img.prev();

    function heightFinder(elem) {
      var height = elem.outerHeight(true);
      if (elem.nextUntil(":not(p, ul, ol, a, span)").length) {
        elem.nextUntil(":not(p, ul, ol, a, span)").each( function() { 
          height += $(this).outerHeight(true);
        });
      }
      return height;
    }

    function offsetFinder() {
      if ($p.length) {
        var totalHeight = heightFinder($p);
        var offset_diff = Math.round(($img.outerHeight(true) - totalHeight) / 2);
        if (offset_diff > 0 ) {
          $p.css("top", offset_diff) && $p.nextUntil(":not(p, ul, a, span, div.post_image)").each ( function() {
            if (!$(this).is('div')) {
              $(this).css('top', offset_diff);
            }
          });
        }
      }
    }
    offsetFinder();
    $img.find('img').load(function() {
      offsetFinder();
    });
    });
  }

  function sizeImages() {
    $(".post_image").each(function() {
      var $img_div = $(this),
    $width = $('#post').width();

    if ($img_div.hasClass('float_right')) {
      $img_div.find('img').width( $width/2 - 10 );
    }
    else if ($img_div.hasClass('center')) {
      $img_div.find('img').width( $width );
    }

    if ($img_div.width() > $width) {
      $img_div.addClass('center').find('img').width( $width - 10);
    }
    });
  }


  sizeImages();
  fixFloatedImages();
  $(window).resize(fixFloatedImages());

});
