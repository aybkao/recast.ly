class App extends React.Component {
  constructor () { 
    super();
    this.state = {
      data: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
   onClick={this.handleClick.bind(this)}
  }  

  handleClick () {
    this.setState({
      done: !this.state.done
    });
  }

  
  


  render () {
    if ( )
    return ( 
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.data} />
      </div>
    </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
