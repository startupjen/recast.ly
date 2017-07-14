class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  componentDidMount() {
    searchYouTube('ham and cheese');
  }

  onVideoEntryClick(video) {
    this.setState({
      currentPlayerVideo: video
    });
  }

  setVideos(videoData) {
    this.setState({currentPlayerVideo: videoData[0], videos: videoData});
  }

  onSearchButtonClick(searchTerm) {
    let videos = [];

    let searchObject = {
      query: searchTerm,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    searchYouTube(searchObject, this.setVideos.bind(this));
    
    console.log('the VIDEOS are in onSearchButtonClick: ');
  }

  render() {
    return (
      <div>
        <Nav onSearchButtonClick={this.onSearchButtonClick.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentPlayerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.onVideoEntryClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//should update the video player when a video entry's title is clicked