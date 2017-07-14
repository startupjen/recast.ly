var searchYouTube = (options, callback) => {
  let url = 'https://www.googleapis.com/youtube/v3/search';
  let hasCallback = typeof callback === 'function';

  $.get('https://www.googleapis.com/youtube/v3/search', 
    {
      part: 'snippet',
      maxResults: options.max,      
      q: options.query,
      key: options.key,
      type: 'video',
    }
  ).done(function(data) { console.log(data); callback(data.items); }).fail(function() { console.log('i failed'); } );
};

window.searchYouTube = searchYouTube;