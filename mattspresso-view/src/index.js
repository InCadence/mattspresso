import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App'
import './App.css';

var pjson = require('../package.json');
document.title = pjson.title;

function loadJSON(name)
{
  return fetch(`cxf/core/property/${name}.json`, {
      method: "GET",
      headers: new Headers({
        'content-type': 'application/json; charset=utf-8'
      }),
    }).then(res => {
      if (!res.ok)
      {
        throw Error(res.statusText);
      }
      return res.json();
    }).catch(function(error) {
      throw Error(error);
    });
}


function loadApplication(theme) {
  ReactDOM.render(
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <V0MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Provider store={store}>
          <App icon={pjson.icon} title={pjson.title} theme={theme}/>
        </Provider>
      </V0MuiThemeProvider>
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}

loadJSON('theme').then((theme) => {
  loadApplication(theme);
}).catch((err) => {
  console.log(`Failed Loading Theme`);
  loadApplication({});
})

