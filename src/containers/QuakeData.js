import React, { Component } from 'react';
import QuakeTile from '../components/QuakeTile';
import SearchField from '../components/SearchField';


class QuakeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: [],
      displayRowCheckbox:false,
      displaySelectAll:false,
      open: false,
      searchWord: ''
    }
    this.getQuakeInfo= this.getQuakeInfo.bind(this);
    this.handleButtonClick= this.handleButtonClick.bind(this);
    this.handleDialogOpen= this.handleDialogOpen.bind(this);
    this.handleDialogClose= this.handleDialogClose.bind(this);
  }

  handleDialogOpen() {
    this.setState({open: true});
  };

  handleDialogClose() {
    this.setState({open: false});
  };

  handleButtonClick() {
    console.log("Are you sure you don't want to see Tay Sway?")
  }

  getQuakeInfo() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://interviewtest.getguru.com/seismic/data.json'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        this.setState({
          earthquakes: data
        })

      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  componentDidMount(){
    this.getQuakeInfo();
  }

  render() {
    let quakeComponents = [].concat(this.state.earthquakes)
    .sort(function(a, b){
      return b.mag - a.mag
    })
    .slice(0, 20)

    .map((quake) => {
      let displayRowCheckbox = this.state.displayRowCheckbox
      let displaySelectAll = this.state.displaySelectAll
      return(
        <QuakeTile
          key={quake.id}
          id={quake.id}
          time={quake.time}
          location={quake.locationSource}
          magnitude={quake.mag}
          displayRowCheckbox={displayRowCheckbox}
          displaySelectAll={displaySelectAll}
          handleClick={this.handleButtonClick}
          handleOpen={this.handleDialogOpen}
          handleClose={this.handleDialogClose}

          open={this.state.open}
          onClick={this.handleClose}
        />
      )
    })
    return (
      <div>
        <h1>Good luck, Beth!</h1>
        <SearchField
          value={this.state.searchWord}
          handleSearchChange={this.handleSearchChange}
        />
        {quakeComponents}

      </div>
    );
  }
}

export default QuakeData;
