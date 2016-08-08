(function($){
	$(function(){

    var navbarHeight = 80;

    // Navbar Affix
    $('#navbar').affix({
      offset: {
        top: function () {
          return (this.top = navbarHeight)
        }
      }
    })
	});
})(jQuery);
