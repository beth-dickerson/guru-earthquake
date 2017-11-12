import React, { Component } from 'react';
import './App.css';
import QuakeData from './containers/QuakeData';

import 'moment-timezone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <QuakeData />
      </MuiThemeProvider>
    );
  }
}

export default App;
