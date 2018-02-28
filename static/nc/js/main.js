$(document).ready(function() {
	highlightNavbarButton();
	highlightIssues();
});

highlightNavbarButton = function() {
	var pathname = window.location.pathname;
	// code for grabbing name of html file (b/c serving up HTML files w/o backend)
	var pathnames = pathname.split("/");
	for(i=0; i < pathnames.length; i++) {
		if ( pathnames[i] == "about" || pathnames[i] == "news" || pathnames[i] == "faq" || pathnames[i] == "contact") {
			$('.nav > li > a[href="/nc/'+pathnames[i]+'"]').parent().addClass('active');
		}
	}
};

highlightIssues = function() {
	$('.content-block-emphasis').hover(function(){
		$(this).parent().parent().addClass('hovered');
	}, function() {
		$(this).parent().parent().removeClass('hovered');
	});
}