(function($){

	$.ajax({
		url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/hatena/b/hotentry&num=-1',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'callback',
		timeout: 1000,
		success: function( data ) {
			jsonParse( data.responseData.feed.entries );
		},
		error: function( data ) {
			console.log( 'error' );
		}
	});

	function jsonParse( entryDate ) {
		for( var i = 0, l = entryDate.length; i < l ; i++ ) {
			console.log( entryDate[ i ].title );
		}
	}

	

})(jQuery)