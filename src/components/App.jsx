class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerVideo: window.exampleVideoData[0]
    };
  }

  onVideoEntryClick(video) {
    this.setState({
      currentPlayerVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
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

/*
var App = (props) => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={window.exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={window.exampleVideoData} />
    </div>
  </div>
);
*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//should update the video player when a video entry's title is clicked