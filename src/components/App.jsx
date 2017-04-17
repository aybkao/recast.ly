
// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]} />
//     </div>
//     <h1>HAHAHA</h1>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData} />
//     </div>
//   </div>
// )

// var video1 = {
//       kind: 'youtube#searchResult',
//       etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
//       id: {
//         kind: 'youtube#video',
//         videoId: 'mFEoarLnnqM'
//       },
//       snippet: {
//         publishedAt: '2014-08-08T21:31:58.000Z',
//         channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
//         title: 'Thinking in React, a step by step screencast tutorial',
//         description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
//         thumbnails: {
//           default: {
//             url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
//             width: 120,
//             height: 90
//           },
//           medium: {
//             url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
//             width: 320,
//             height: 180
//           },
//           high: {
//             url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
//             width: 480,
//             height: 360
//           }
//         },
//         channelTitle: '',
//         liveBroadcastContent: 'none'
//       }
//     };

class App extends React.Component {
  constructor (props) { 
    super(props);
    this.state = {
      done: false,
      data: window.exampleVideoData,
      currentVideo: window.exampleVideoData[3]
    };
  }
  

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }


  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  


  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        data: videos,
        currentVideo: videos[0]
      })
    );
  }
  
  
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  

  render () {
    
    var style = {fontWeight: this.state.done ? 'bold' : 'none'};

    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <h1>HAHAHA1</h1>
        <h2 style={style} onMouseEnter={this.onListItemClick.bind(this)}>HOVER bold</h2>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} />
        </div>
      </div>

    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
