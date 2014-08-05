(function ($) {


$(document).ready(function() {
  $("h3#portfolio-skills").click(function() {
    $("#portfolio-tagcloud").load("/tagadelic_taxonomy ul.tag-cloud");
  });
});

})(jQuery);
