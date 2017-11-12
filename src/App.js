import React, { Component } from 'react';
import './App.css';
import QuakeData from './containers/QuakeData';

import 'moment-timezone';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {

  render() {
    let style = {
      margin: 30,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Paper style={style} zDepth={5}>
          <QuakeData />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
