class App extends React.Component {
  constructor(props) {
    super(props);

    //when someone clicks VideoListEntry,
    //re-renders on the App
    //gets the clicked on video
    
    //how do you get the video clicked on?
    //bind passes the object
    //app passes it into render and re-renders
  }

  

  render(videoToPlay) {
    return (
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