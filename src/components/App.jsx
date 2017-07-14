class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  ComponentDidMount() {
    searchYouTube('ham and cheese');
  }

  onVideoEntryClick(video) {
    this.setState({
      currentPlayerVideo: video
    });
  }

  onSearchButtonClick(searchTerm) {
    let videos = [];

    let searchObject = {
      query: searchTerm,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    let getFetchedData = function(items) {
      videos = items.map( item => Object.assign({}, item) );
      console.log('the VIDEOS are in getFetchedData: ' + videos);
      //if this is successful, can pass the change to here
    };

    searchYouTube(searchObject, getFetchedData);
    
    console.log('the VIDEOS are in onSearchButtonClick: ' + videos);

    this.setState({ videos: videos} );    

  }

  render() {
    return (
      <div>
        <Nav onSearchButtonClick={this.onSearchButtonClick.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentPlayerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} click={this.onVideoEntryClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//should update the video player when a video entry's title is clicked