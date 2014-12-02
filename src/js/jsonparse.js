(function(window, $, undefined) {
  $(function() {
    var feedUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/hatena/b/hotentry&num=-1';

    $.ajax({
      url: feedUrl,
      type: 'GET',
      cache: false,
      dataType: 'jsonp',
      success: function(data) {
        for (var i = 0; i < data.responseData.feed.entries.length; i++) {
          console.log(data.responseData.feed.entries);
        }
      }
    });
  });
})(window, jQuery);