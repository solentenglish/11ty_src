/*---------------------------------------------------------------------------------------------
  Skip Link Focus Fix
----------------------------------------------------------------------------------------------*/
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();


/*---------------------------------------------------------------------------------------------
  Scroll to top
----------------------------------------------------------------------------------------------*/
(function() {
    var smoothup = document.querySelector('.smoothup');
    if (!smoothup) return;

    smoothup.style.cssText += ';opacity:0;transition:opacity 0.4s;pointer-events:none';

    window.addEventListener('scroll', function() {
        var visible = window.scrollY >= 400;
        smoothup.style.opacity = visible ? '1' : '0';
        smoothup.style.pointerEvents = visible ? 'auto' : 'none';
    });

    smoothup.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();